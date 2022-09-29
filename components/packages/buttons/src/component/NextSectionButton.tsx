import React from 'react';
import styled, { css } from 'styled-components';

export interface NextSectionButtonProps {
  sectionId: string;
  labelOnMobile?: string;
}

/**
 * Standard CTA button component
 * @param {string} sectionId - This is the ID of the next section.
 * @param {string} labelOnMobile - This is the label of the button on mobile version, default value is 'SWIPE UP OR TAP FOR MORE'.
*/

const NextSectionButton = ({
  sectionId,
  labelOnMobile = 'SWIPE UP OR TAP FOR MORE'
}: NextSectionButtonProps): JSX.Element => {

  /**
   * Function which runs when using the button.
  */
  const scrollToSection = (): void => {
    const sectionElement = document.getElementById(sectionId);
    sectionElement?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  /**
   * Function which runs when using the button with the keyboard.
  */
  const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>): void => {
    if (event.currentTarget && event.key === 'Enter') {
      scrollToSection();
    }
  };

  return (
    <StyleWrapper
      data-testid="next-section"
      className='next-section'
      type='button'
      onClick={scrollToSection}
      onKeyDown={handleKeyPress}
    >
      <span className='next-section--text'>{labelOnMobile}</span>
      <span className='next-section--arrow-down'></span>
    </StyleWrapper>
  );
};

const NextSectionButtonStyles = css`
  &.next-section {
    display: block;
    margin: 0 auto;
    outline: none;
    border: none;
    background-color: transparent;
    padding: 6.5px 8px;
    position: relative;
    z-index: 1;

    @media (max-width: 991px) {
      max-width: 96px;
      background-color: #dadad3;
      border-radius: 4px;
      padding: 13px 8px;
    }
  }

  .next-section--text {
    display: block;
    text-align: center;
    font-weight: bold;
    font-size: 10px;
    line-height: 11px;
    letter-spacing: 0px;
    color: var(--grey-200);
    text-transform: uppercase;

    @media (min-width: 992px) {
      display: none;
    }
  }

  .next-section--arrow-down {
    display: block;
    width: 30px;
    height: 30px;
    border: 2px solid var(--grey-200);
    border-left: 0;
    border-bottom: 0;
    transform: rotate(135deg);
    margin: 0 auto;
    margin-top: -20px;

    @media (max-width: 991px) {
      width: 15px;
      height: 15px;
      border-width: 3px;
      margin-top: 2px;
      border-radius: 2px;
    }
  }
`; 

const StyleWrapper = styled.button<{className?:string}>`
  ${NextSectionButtonStyles}
`;

export default NextSectionButton;
