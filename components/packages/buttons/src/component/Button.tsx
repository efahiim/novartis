import React from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'large';
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
}

/**
 * Standard CTA button component
 * @param {boolean} primary - This is used to switch between transparent button and solid button.
 * @param {string} size - This is used to determine the size of the button. It can take values of 'small' or 'large'.
 * @param {string} label - This is the label of the button.
 * @param {Function} onClick - This is a function of type React.MouseEventHandler that is called when the button is clicked.
 * @param {Function} onKeyDown - This is a function of type React.KeyboardEventHandler that is called when the button is pressed with Spacebar or Enter key.
*/

const Button = ({
  primary = true,
  size = 'large',
  label,
  onClick,
  onKeyDown,
}: ButtonProps): JSX.Element => {
  const buttonType = primary ? 'button--primary' : 'button--secondary';

  return (
    <StyleWrapper
      data-testid="button"
      type="button"
      className={['button', `button--${size}`, buttonType].join(' ')}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {label}
    </StyleWrapper>
  );
};

const ButtonStyles = css`
  &.button {
    font-family: var(--font-primary);
    border: 1px solid var(--dark-pink);
    cursor: pointer;
    background-color: transparent;
    color: var(--dark-pink);
    font-size: 14px;
    text-transform: capitalize;
    border-radius: 3px;
    &:hover {
      background-color: var(--dark-pink);
      color: var(--white);
    }
  }
  &.button--secondary {
    color: var(--white);
    background-color: transparent;
    background-image: linear-gradient(to right, var(--dark-pink), var(--dark-pink), var(--dark-pink), var(--dark-pink), var(--dark-pink));
    border: 0;
    width: 159px;
    height: 45px;
    &:hover {
      background-color: transparent;
      color: var(--white);
      background-image: var(--gradient);
    }
  }
  &.button--small {
    min-width: 141px;
    height: 36px;
  }
  &.button--large {
    width: auto;
    min-height: 40px;
    padding: 0 10px;

    @media(min-width: 992px){
      min-height: 43px;
      min-width: 157px;
      padding: 0;
    }

  }
`; 

const StyleWrapper = styled.button<{className?:string}>`${ButtonStyles}`;

export default Button;
