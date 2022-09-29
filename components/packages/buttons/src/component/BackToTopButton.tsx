import React from 'react';
import styled, { css } from 'styled-components';

export interface BackToTopButtonProps {
  label?: string;
  color?: 'pink' | 'purple';
  mobileVersion?: boolean;
  sectionTopId?: string;
  onClick?: () => void;
}

/**
 * Standard CTA button back to top component
 * @param {string} label - Optional: This is the label of the button, the default value is 'Return to Top'.
 * @param {string} color - Optional: This is the color of the button, the default value is 'purple'.
 * @param {boolean} mobileVersion - Optional: This is a boolean used to determine if the button should appear in it's mobile version.
 * @param {string} sectionTopId - Optional: This is a string used to determine if there is a specific top element to scroll.
*/

const BackToTopButton = ({
  label = 'Return to Top',
  color = 'purple',
  mobileVersion = false,
  sectionTopId,
  onClick
}: BackToTopButtonProps): JSX.Element => {
  const mobileClass: string = mobileVersion ? 'button-totop--mobile' : '';
  const scrollToTop = (): void => {
    if(onClick){
      onClick();
    } else {
      if(sectionTopId){
        const sectionTopElement = document.getElementById(sectionTopId);
        sectionTopElement?.scrollIntoView({behavior: 'smooth'});
      } else {
        window.scroll({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent): void => {
    if (event.currentTarget && event.key === 'Enter') {
      scrollToTop();
    };
  };

  return (
    <StyleWrapper
      data-testid="button-totop"
      type="button"
      className={['button-totop', `button-totop--${color}`, `${mobileClass}`].join(' ')}
      onClick={scrollToTop}
      onKeyDown={handleKeyPress}
    >
      
      {
        !mobileVersion && (
          <>
            <span className='button-totop__border'></span>
            {label}
          </>
        )
      }
      {
        mobileVersion && (
          <div className='button-totop__wrapper'>
            <span className='button-totop__border--mobile'></span>
          </div>
        )
      }
    </StyleWrapper>
  );
};

const BackToTopButtonStyles = css`
  &.button-totop {
    position: absolute;
    bottom: 635px;
    right: 0;
    max-width: 60px;
    min-height: 44px;
    outline: none;
    border: none;
    text-align: center;
    letter-spacing: 0;
    font-size: 11px;
    line-height: 1.2;
    font-weight: bold;
    padding: 7px;

    @media (min-width: 992px) {
      max-width: 104px;
      min-height: 78px;
      font-size: 16px;
      padding: 7px 27px;
    }

    &--purple {
      color: var(--dark-purple);
      background-color: var(--light-purple);

      .button-totop__border {
        color: var(--dark-purple);
        border-color: var(--dark-purple);
      }
    }

    &--pink {
      color: var(--dark-pink);
      background-color: var(--light-pink);

      .button-totop__border {
        color: var(--dark-pink);
        border-color: var(--dark-pink);
      }
    }

    &--mobile {
      width: 100%;
      height: unset;
      max-width: unset;
      max-height: unset;
      padding: 0;
      position: unset;
      background-color: transparent;
      display: flex;
      justify-content: center;
      padding-top: 5px;

      .button-totop__wrapper {
        width: 77px;
        height: 30px;
        background-color: var(--grey-300);
        display: flex;
        align-items: center;
        padding-top: 8px;
        border-radius: 4px;
      }

      .button-totop__border--mobile {
        color: var(--grey-200);
        width: 15px;
        height: 15px;
        display: block;
        margin: 0 auto;
        width: 15px;
        height: 15px;
        transform: rotate(225deg);
        border-bottom: 3px solid;
        border-right: 3px solid;
        font-family: var(--font-primary-medium);
      }

      @media (min-width: 992px) {
        display: none;
      }
    }

    .button-totop__border {
      display: block;
      margin: 0 auto;
      width: 12px;
      height: 12px;
      transform: rotate(225deg);
      border-bottom: 3px solid;
      border-right: 3px solid;
      font-family: var(--font-primary-medium);

      @media (min-width: 992px) {
        width: 20px;
        height: 20px;
        border-bottom: 4px solid;
        border-right: 4px solid;
      }
    }
  }
`; 

const StyleWrapper = styled.button<{className?:string}>`${BackToTopButtonStyles}`;

export default BackToTopButton;