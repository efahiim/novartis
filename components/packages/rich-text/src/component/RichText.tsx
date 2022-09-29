/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled, { css } from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document, BLOCKS, INLINES } from '@contentful/rich-text-types';
// import { Picture } from '@components/picture';
import { Button } from '@components/buttons';
import { HintItem } from '@components/hint-item';
import { PictoParagraph } from '@components/picto-paragraph';
import { Question } from '@components/question';
import { Iframe } from '@components/iframe';
import { Splide } from '@splidejs/react-splide';
interface Data {
  sys: {
    id: string;
  };
  __typename: string;
}

enum EntryType {
  block = 'block',
  inline = 'inline'
}
type EntryEventType = {
  [id: string]: {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
  }
}

type CtaContainerFunctionType = (event:Event, splideElement:React.RefObject<Splide>) => void;

type CtaContainerEventType = {
  [id: string]: {
    onClick?: CtaContainerFunctionType;
    onKeyDown?: CtaContainerFunctionType;
  }
}

export type EntriesEventsType = {
  video?: EntryEventType;
  cta?: EntryEventType;
  ctaContainer?: {
    [slug: string]: CtaContainerEventType;
  };
}

export interface RichTextProps {
  json: Document;
  screenSlug?: string;
  splideElement?: React.RefObject<Splide>;
  links?: {
    entries: {
      block: Data[];
      inline: Data[];
    };
    assets: {
      block: Data[];
      inline: Data[];
    };
  };
  events?: EntriesEventsType;
}

/**
 * Rich Text component
 * @param { Document } json - REQUIRED: Content to render.
 * @param { Document } links - OPTIONAL: Links data for any nodeType.
 */

const RichText = ({ 
  json,
  links,
  events,
  screenSlug,
  splideElement
}: RichTextProps): JSX.Element => {

  /**
   * Function to render Links Assets such as images.
   * @param { any } node - REQUIRED: The content.
   * @param { EntryType } type - REQUIRED: The type of content.
   */
  const loadAssets = (node: any, type: EntryType): any => {
    if (!links || !links.assets) {
      return null;
    }
    const data: any = links.assets[type].find(row => row.sys.id === node.data.target.sys.id);
    if (!data) return null;
    // const Component = <Picture>([<img src={`${data?.url}?w=${data?.width}&fm=webp&q=70`} alt={data?.alt || data?.title} width={data?.width} height={data?.height} />])</Picture>;
    const Component = (
      <div className='rich-text-image'>
        <img 
          className='img-block'
          src={`${data?.url}?fm=webp&q=70`}
          alt={data?.alt || data?.title}
        />
      </div>
    );
    
    return Component;
  };

  /**
   * Function to render Links Entries - Embedded content types.
   * @param { any } node - REQUIRED: The content.
   * @param { EntryType } type - REQUIRED: The type of content.
   */
  const loadEntries = (node: any, type: EntryType): any => {
    if (!links || !links.entries) {
      return null;
    }
    const data: any = { 
      ...links.entries[type].find(row => row.sys.id === node.data.target.sys.id),
    };
    if (!data) return null;

    let Component;

    // Generate colored text based on type - P, SPAN etc...
    const generateColorText = (type: string, color: string, text: string): React.ReactElement => {
      if (type === 'p') {
        return (<p className={color === 'red' ? 'color-text--pink' : 'color-text--purple'}>{text}</p>);
      } else {
        return (<span className={color === 'red' ? 'color-text--pink' : 'color-text--purple'}>{text}</span>);
      }
    };

    // Generate question and answers.
    const generateAnswers = (items: []): any => {
      const answerButtons: { label: string, text: string, color: string, onClick?: React.MouseEventHandler<HTMLButtonElement> }[] = [];
      items.forEach((element: any) => {
        answerButtons.push({
          label: element.value,
          text: element.answerText,
          color: element.value === 'A' ? 'pink' : 'purple'
        });
      });
    
      return answerButtons;
    };

    // Event for CTA Container Buttons
    const getEventByTypeName: any = (typeName: string, eventName: 'onClick'|'onKeyDown', elementData: any) => {
      if(typeName === 'CtaContainer') {
        const eventFunction = events && screenSlug && events.ctaContainer && events.ctaContainer[screenSlug] && events.ctaContainer[screenSlug][elementData.label] ? events.ctaContainer[screenSlug][elementData.label][eventName] : undefined;
        if (eventFunction && splideElement) {
          return (e: Event) => {
            eventFunction(e, splideElement);
          };
        } else if (eventFunction) {
          return eventFunction;
        }
      }

      return undefined;
    };

    // Switch case statement to render the component based on the nodeType.
    switch (data.__typename) {
      case 'ColorText':
        Component = generateColorText(data.type, data.color, data.label);
        break;
      case 'Cta':
        Component = <Button
          primary={true}
          label={data.label}
          onClick={ events && events.cta && events.cta[data.label] ? events.cta[data.label]['onClick'] : undefined }
          onKeyDown={ events && events.cta && events.cta[data.label] ? events.cta[data.label]['onKeyDown'] : undefined }
        />;
        break;
      case 'HintBox':
        Component = <HintItem label={data.hintBoxText} />;
        break;
      case 'InfoContent':
        Component = <PictoParagraph 
          withBackground={data.image ? false : true}
          text={
            {
              json: data.infoContentText.json,
              links: data.infoContentText.links
            }
          }
          imageUrl={data.image ? data.image.url : ''}
          imageAlt={data.image ? data.image.title : ''}
        />;
        break;
      case 'Question':
        Component = <Question 
          question={data.questionText}
          answers={generateAnswers(data.answerPickerCollection.items)}
          display={data.display}
        />;
        break;
      case 'CtaContainer':
        Component = <div className='cta-container'>
          {
            data.itemsCollection.items.map((cta: any, index: number) => {
              return (<Button
                primary={true}
                label={cta.label}
                key={index}
                onClick={ getEventByTypeName(data.__typename, 'onClick', cta) }
                onKeyDown={ getEventByTypeName(data.__typename, 'onKeyDown', cta) }
              />);
            })
          }
        </div>;
        break;
      case 'Video':
        Component = <Iframe url={data.url} />;
        break;
      default:
    }

    // if (Component !== null && Component !== undefined) return Component && <Component {...data} />;
    if (Component !== null && Component !== undefined) return Component;
  };

  // React rich text renderer options.
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any): JSX.Element => {
        if(node.content.length == 1 && node.content[0].value === '') {
          return <br />;
        } 
        return (<p className="rich-text-paragraph">{children}</p>);
      },
      [BLOCKS.HEADING_3]: (node: any, children: any): JSX.Element => (
        <h3 className="rich-text-heading-3">{children}</h3>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any): JSX.Element => loadAssets(node, EntryType.block),
      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => loadEntries(node, EntryType.block),
      [BLOCKS.UL_LIST]: (node: any, children: any) => <ul className="rich-text-list">{children}</ul>,
      [BLOCKS.OL_LIST]: (node: any, children: any) => <ol className="rich-text-list">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => <li>{children}</li>,
      [INLINES.EMBEDDED_ENTRY]: (node: any) => loadEntries(node, EntryType.inline),
      [INLINES.HYPERLINK]: (node: any, children: any) => (
        <a
          href={node.data.uri}
          target='_blank'
          rel='noopener noreferrer'
        >
          {children}
        </a>
      )
    }
  };
  
  const renderContent = documentToReactComponents(json, options);

  return (
    <StyleWrapper
      data-testid="rich-text"
      className="rich-text"
    >
      {renderContent}
    </StyleWrapper>
  );
};

const RichTextStyles = css`
  &.rich-text {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    p {
      width: 100%;
      margin-bottom: 2%;

      @media (min-width: 992px){
        margin-bottom: 1rem;
      }
    }

    .rich-text-image {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }

    .rich-text-list {
      margin-bottom: 1rem;

      li {
        p {
          margin: 0;
          margin-left: 5px;
          display: inline;
        }

        &:before {
          display: inline;
        }
      }
    }

    .color-text--pink {
      color: var(--dark-pink);
      font-family: var(--font-primary-semibold);
      margin: 10px 0;

      @media (min-width: 992px) {
        margin: 20px 0;
      }

    }

    .color-text--purple {
      color: var(--dark-purple);
      font-family: var(--font-primary-semibold);
      margin: 20px 0;
    }

    img.img-block {
      max-width: 100%;
      min-height: 100%;
      object-fit: contain;
      object-position: top center;
    }

    button {
      align-self: center;
      margin-top: 15px;
      margin-bottom: 30px;
    }

    .cta-container {
      width: 100%;
      display: flex;
      justify-content: space-between;

      @media (min-width: 992px){
        justify-content: flex-start;
      }

      button {
        margin-inline-end: 0;

        @media (min-width: 992px){
          margin-inline-end: 20px;
        }
      }
    }
  }
`;

const StyleWrapper = styled.div<{ className?: string }>`
  ${RichTextStyles}
`;

export default RichText;
