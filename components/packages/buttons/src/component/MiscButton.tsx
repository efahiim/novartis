import React from 'react';
import styled, { css } from 'styled-components';

export interface MiscButtonProps {
  color?: 'pink' | 'purple';
  direction?: 'left' | 'right';
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
}

const leftChevron = (
  <svg id="left_chevron" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" role="img" aria-labelledby="svgTitle svgDesc">
    <title id="svgTitle">Left chevron icon</title>
    <desc id="svgDesc">An icon illustrating a left hand-side pointed chevron</desc>
    <g id="left_chevron" transform="translate(31 476.231) rotate(180)">
      <g id="Group_1098" data-name="Group 1098" transform="translate(-21 424)">
        <path id="left_chevron" d="M58.586,751.79a2.477,2.477,0,0,1-.729,1.758l-9.119,9.117,9.119,9.117a2.485,2.485,0,1,1-3.515,3.514L43.465,764.421a2.484,2.484,0,0,1,0-3.514l10.877-10.875a2.486,2.486,0,0,1,4.243,1.758" transform="translate(76.541 789.082) rotate(180)" fill="#ffffff"/>
      </g>
    </g>
  </svg>
);

const rightChevron = (
  <svg id="right_chevron" xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" role="img" aria-labelledby="svgTitle svgDesc">
    <title id="svgTitle">Right chevron icon</title>
    <desc id="svgDesc">An icon illustrating a right hand-side pointed chevron</desc>
    <g id="right_chevron" transform="translate(31 476.231) rotate(180)">
      <g id="Group_1098" data-name="Group 1098" transform="translate(-21 424)">
        <path id="right_chevron" d="M58.586,751.79a2.477,2.477,0,0,1-.729,1.758l-9.119,9.117,9.119,9.117a2.485,2.485,0,1,1-3.515,3.514L43.465,764.421a2.484,2.484,0,0,1,0-3.514l10.877-10.875a2.486,2.486,0,0,1,4.243,1.758" transform="translate(-24.782 -736.246)" fill="#ffffff"/>
      </g>
    </g>
  </svg>
);

/**
 * Miscellaneous Button Component
 * @param {string} color - This is a string used to determine the color of the button. It can take values of 'pink' or 'purple'.
 * @param {string} direction - This is a string used to determine the direction of the arrow. It can take values of 'left' or 'right'.
 * @param {string} label - This is the label of the button (string).
 * @param {Function} onClick - This is a function of type React.MouseEventHandler that is called when the button is clicked.
 * @param {Function} onKeyDown - This is a function of type React.KeyboardEventHandler that is called when the button is pressed with Spacebar or Enter key.
*/

const MiscButton = ({
  color = 'pink',
  direction,
  label,
  onClick,
  onKeyDown,
}: MiscButtonProps): JSX.Element => {
  const colorClass: string = color === 'pink' ? 'misc-button--pink' : 'misc-button--purple';
  const directionClass: string = direction === 'left' ? 'misc-button--left' : 'misc-button--right';

  return (
    <StyleWrapper
      data-testid="misc-button"
      type="button"
      className={['misc-button', colorClass, directionClass].join(' ')}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <span className='misc-button__icon'>{direction === 'left' ? leftChevron : rightChevron}</span>
      <span className='misc-button__label'>{label}</span>
    </StyleWrapper>
  );
};

const MiscButtonStyles = css`
  &.misc-button {
    font-family: var(--font-primary-semibold);
    border: 0;
    background-color: transparent;
    text-transform: capitalize;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    position: relative;
    padding: 0;

    .misc-button__label {
      width: 135px;
      height: 65px;
      border-radius: 3px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      font-size: 14px;
      line-height: 1;
    }

    .misc-button__icon {
      position: absolute;
      width: 32px;
      height: 64px;

      svg {
        opacity: 0.65;
        transition: all .15s ease-in-out;
        width: 32px;
        height: 64px;
      }
    }

    &:hover {
      .misc-button__icon svg {
        opacity: 1;
      }
    }

    @media (min-width: 992px) {
      flex-direction: column;

      .misc-button__label {
        width: 134px;
        height: 120px;
        font-size: 16px;
      }

      .misc-button__icon {
        width: 52px;
        height: 52px;

        svg {
          width: auto;
          height: auto;
        }
      }
    }
  }
  &.misc-button--left {
    .misc-button__label {
      text-align: left;
      padding-left: 40px;
      border-top-right-radius: 3px;
      border-top-left-radius: 0;
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 0;

      @media (min-width: 992px) {
        text-align: right;
        padding-left: 20px;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      }
    }

    .misc-button__icon {
      top: 1px;
      left: 0;
      border-top-right-radius: 55px;
      border-bottom-right-radius: 55px;

      svg {
        padding-right: 4px;
      }

      @media (min-width: 992px) {
        top: -26px;
        left: 43px;
        border-top-left-radius: 55px;
        border-bottom-left-radius: 55px;

        svg {
          padding-right: 2px;
        }
      }
    }
  }
  &.misc-button--right {
    .misc-button__label {
      text-align: right;
      padding-right: 40px;
      border-top-right-radius: 0;
      border-top-left-radius: 3px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 3px;

      @media (min-width: 992px) {
        text-align: left;
        padding-right: 20px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
      }
    }

    .misc-button__icon {
      top: 1px;
      right: 0;
      border-top-left-radius: 55px;
      border-bottom-left-radius: 55px;

      svg {
        padding-left: 4px;
      }

      @media (min-width: 992px) {
        top: -26px;
        left: 43px;
        border-top-right-radius: 55px;
        border-bottom-right-radius: 55px;

        svg {
          padding-left: 2px;
        }
      }
    }
  }
  &.misc-button--pink {
    .misc-button__label {
      background-color: var(--light-pink);
      color: var(--dark-pink);
    }

    .misc-button__icon {
      background-color: var(--dark-pink);
    }
  }
  &.misc-button--purple {
    .misc-button__label {
      background-color: var(--light-purple);
      color: var(--dark-purple);
    }

    .misc-button__icon {
      background-color: var(--dark-purple);
    }
  }
`; 

const StyleWrapper = styled.button<{className?:string}>`${MiscButtonStyles}`;

export default MiscButton;