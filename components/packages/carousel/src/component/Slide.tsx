import React from 'react';
import styled, { css } from 'styled-components';
import { RichText, RichTextProps, EntriesEventsType } from '@components/rich-text';
import { Splide } from '@splidejs/react-splide';

export interface SlideProps {
  title: string;
  slug: string;
  leftContent: RichTextProps;
  rightContent?: RichTextProps;
  events?: EntriesEventsType;
  splideElement?: React.RefObject<Splide>;
}

/**
 * Slide component
 * @param {string} title - REQUIRED: This is title that will be rendered at the top of the slide.
 * @param {RichTextProps} leftContent - REQUIRED: This is content that will be rendered below the title in terms of Rich Text on the left side.
 * @param {RichTextProps} rightContent - OPTIONAL: This is content that will be rendered below the title in terms of Rich Text on the right side.
*/

const Slide = ({
  title,
  leftContent,
  rightContent,
  events,
  slug,
  splideElement
}: SlideProps): JSX.Element => {
  const fullWidthContent: string = rightContent !== null ? 'full-width' : '';

  return (
    <StyleWrapper
      data-testid="slide"
      className="slide"
    >
      <h2>{title}</h2>
      <div className='slide__content'>
        <div className={['content__left', `content__left--${fullWidthContent}`].join(' ')}>
          <RichText json={leftContent.json} links={leftContent.links} events={events} screenSlug={slug} splideElement={splideElement}/>
        </div>
        {
          (rightContent && <div className='content__right'><RichText json={rightContent.json} links={rightContent.links} events={events} screenSlug={slug} splideElement={splideElement}/></div>)
        }
      </div>
    </StyleWrapper>
  );
};

const SlideStyles = css`
  &.slide {
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 100%;

    h2 {
      text-align: center;
      line-height: 1.1;
    }
  }

  .slide__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    padding-top: 0;
    gap: 0;
    height: auto;
    max-height: 100%;
    overflow-y: scroll;

    @media (min-width: 992px) {
      flex-direction: row;
      padding-top: 30px;
      gap: 50px;
      overflow-y: unset;
    }

    .content__left {
      flex: 0 1 auto;
      padding-bottom: 10px;

      @media (min-width: 992px) {
        width: 50%;
        flex: 1;
        padding-bottom: 0;
      }

      &.content__left--full-width {
        @media (min-width: 992px) {
          max-width: 50%;
          margin: 0 auto;
        }
      }
    }

    .content__right {
      flex: 1;

      @media (min-width: 992px) {
        width: 50%;
      }
    }
  }
`; 

const StyleWrapper = styled.div<{className?:string}>`${SlideStyles}`;

export default Slide;
