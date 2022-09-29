import React from 'react';
import styled, { css } from 'styled-components';

export interface SimpleActionButtonProps {
  color?: 'pink' | 'purple';
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
}

/**
 * Standard CTA action item component
 * @param {string} color - OPTIONAL: This is the color of the action item, the default value is 'pink'.
 * @param {string} label - REQUIRED: This is the label of the action item.
 * @param {Function} onClick - OPTIONAL: This is a function of type React.MouseEventHandler that is called when the button is clicked.
 * @param {Function} onKeyDown - OPTIONAL: This is a function of type React.KeyboardEventHandler that is called when the button is pressed with Spacebar or Enter key.
*/

const SimpleActionButton = ({
  color = 'pink',
  label,
}: SimpleActionButtonProps): JSX.Element => {
  return (
    <StyleWrapper
      data-testid="simple-action-button"
      type="button"
      className={['simple-action-button', `simple-action-button--${color}`].join(' ')}
    >
      {label}
    </StyleWrapper>
  );
};

const SimpleActionButtonStyles = css`
  &.simple-action-button {
    font-family: var(--font-primary-semibold);
    color: #ffffff;
    width: 100px;
    height: 100%;
    min-height: 53px;
    border: none;
    border-radius: 2px;
    font-size: 18px;
    font-style: normal;
    line-height: 1.4;
    border-radius: 3px;
    margin-inline-end: 30px;
    cursor: default;

    @media (min-width: 992px){
      font-size: 32px;
    }

  }

  &.simple-action-button--pink {
    background-color: var(--dark-pink);
  }

  &.simple-action-button--purple {
    background-color: var(--dark-purple);
  }
`;

const StyleWrapper = styled.button<{className?:string}>`
  ${SimpleActionButtonStyles}
`;

export default SimpleActionButton;
