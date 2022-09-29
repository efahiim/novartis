import React from 'react';
import styled, { css } from 'styled-components';

export interface PillButtonProps {
  color?: 'pink' | 'purple';
  fullSize?: boolean;
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
 * Pill button component.
 * @param {string} color - This is a string used to determine the color of the button. It can take values of 'pink' or 'purple'.
 * @param {boolean} fullSize - This is a boolean used to determine if the button should be full sized with label or small sized with an arrow SVG.
 * @param {string} direction - This is a string used to determine the direction of the arrow. It can take values of 'left' or 'right'.
 * @param {string} label - This is the label of the button (string).
 * @param {Function} onClick - This is a function of type React.MouseEventHandler that is called when the button is clicked.
 * @param {Function} onKeyDown - This is a function of type React.KeyboardEventHandler that is called when the button is pressed with Spacebar or Enter key.
*/

const PillButton = ({
  color = 'pink',
  fullSize = true,
  direction,
  label,
  onClick,
  onKeyDown,
}: PillButtonProps): JSX.Element => {
  const sizeClass: string = fullSize ? 'pill-button--fullsize' : 'pill-button--smallsize';
  const colorClass: string = color === 'pink' ? 'pill-button--pink' : 'pill-button--purple';
  const directionClass: string = direction === 'left' ? 'pill-button--left' : 'pill-button--right';
  let content;

  if (fullSize) {
    content = label;
  } else {
    content = direction === 'left' ? leftChevron : rightChevron;
  }

  return (
    <StyleWrapper
      data-testid="pill-button"
      type="button"
      className={['pill-button', sizeClass, colorClass, directionClass].join(' ')}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {content}
    </StyleWrapper>
  );
};

const PillButtonStyles = css`
  &.pill-button {
    font-family: var(--font-primary-medium);
    border: 0;
    background-color: transparent;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;

    svg {
      opacity: 0.65;
    }

    &:hover {
      background-image: var(--gradient);

      svg {
        opacity: 1;
      }
    }
  }
  &.pill-button--fullsize {
    width: 107px;
    height: 53px;
    padding: 0 20px;
    font-size: 14px;
    line-height: 1.2;
  }
  &.pill-button--smallsize {
    width: 27px;
    height: 53px;
    padding: 0;

    @media (min-width: 992px) {
      width: 52px;
      height: 52px;
    }
  }
  &.pill-button--left {
    border-top-right-radius: 55px;
    border-bottom-right-radius: 55px;

    svg {
      padding-right: 4px;
    }

    @media (min-width: 992px) {
      border-top-left-radius: 55px;
      border-bottom-left-radius: 55px;

      svg {
        padding-right: 2px;
      }
    }
  }
  &.pill-button--right {
    border-top-left-radius: 55px;
    border-bottom-left-radius: 55px;

    svg {
      padding-left: 4px;
    }

    @media (min-width: 992px) {
      border-top-right-radius: 55px;
      border-bottom-right-radius: 55px;

      svg {
        padding-left: 2px;
      }
    }
  }
  &.pill-button--pink {
    background-image: linear-gradient(to right, var(--dark-pink), var(--dark-pink), var(--dark-pink), var(--dark-pink), var(--dark-pink));
    color: var(--white);
  }
  &.pill-button--purple {
    background-image: linear-gradient(to right, var(--dark-purple), var(--dark-purple), var(--dark-purple), var(--dark-purple), var(--dark-purple));
    color: var(--white);
  }
`; 

const StyleWrapper = styled.button<{className?:string}>`${PillButtonStyles}`;

export default PillButton;