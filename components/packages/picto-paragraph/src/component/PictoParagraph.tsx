import React from 'react';
import styled, { css } from 'styled-components';
import { RichText, RichTextProps } from '@components/rich-text';

export interface PictoParagraphProps {
  withBackground: boolean;
  imageUrl?: string;
  imageAlt?: string;
  text: RichTextProps;
  title?: string;
}

/**
 * Picto paragraph component
 * @param {boolean} withBackground - This is a boolean used to determine if the paragraph should have a background-color or an image.
 * @param {string} imageUrl - The URL of the image to display.
 * @param {string} imageAlt - The alt of the image.
 * @param {RichTextProps} text - The paragraph text to display in terms of Rich Text.
 * @param {string} title - This is the title of the content if withBackground = true.
*/

const PictoParagraph = ({
  withBackground = false,
  imageUrl,
  imageAlt,
  text,
  title,
}: PictoParagraphProps): JSX.Element => {
  const backgroundClass = withBackground ? 'picto-paragraph--background' : '';
  let content;

  if (withBackground) {
    content = (
      <>
        <h2 className='picto-paragraph__title'>{title}</h2>
        <div className="picto-pararaph__text">
          {
            <RichText json={text.json} links={text.links} />
          }
        </div>
      </>
    );
  } else {
    content = (
      <>
        <img className="picto-paragraph__img" src={imageUrl} alt={imageAlt} width="75" height="75" />
        <div className="picto-pararaph__text">
          {
            <RichText json={text.json} links={text.links} />
          }
        </div>
      </>
    );
  }

  return (
    <StyleWrapper
      data-testid="picto-paragraph"
      className={['picto-paragraph', backgroundClass].join(' ')}
    >
      {content}
    </StyleWrapper>
  );
};

const PictoParagraphStyles = css`
  &.picto-paragraph {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin: 15px 0;

    .picto-paragraph__img {
      height: auto;

      @media (min-width: 992px){
        height: 100%;
      }
    }
    
    .picto-pararaph__text {
      margin-bottom: 0;
      margin-left: 20px;
      font-family: var(--font-primary);
      color: var(--grey-900);
      display: flex;
      align-items: center;
    }
  }
  &.picto-paragraph--background {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    min-height: 230px;
    background-image: var(--gradient-bottom-right);

    .picto-paragraph__title {
      font-family: var(--font-primary-bold);
      font-size: 48px;
      color: var(--white);
      margin-top: 40px;
      margin-bottom: 10px;
      padding: 0 35px;
    }

    .picto-pararaph__text {
      font-family: var(--font-primary-medium);
      font-size: 18px;
      color: var(--white);
      margin: 0;
      padding: 0 35px;
      max-width: initial;
      width: 100%;
      height: auto;
    }
  }
`; 

const StyleWrapper = styled.div<{className?:string}>`${PictoParagraphStyles}`;

export default PictoParagraph;
