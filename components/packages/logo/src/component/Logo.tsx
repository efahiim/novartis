import React from 'react';
import styled, { css } from 'styled-components';

export interface LogoProps {
  imageSrc: string;
  imageAlt: string;
  imageLink: string;
  leftText: string;
  rightText: string;
}

/**
 * Logo component
 * @param {string} imageSrc - This is used for the path of the logo.
 * @param {string} imageAlt - This is used as an alternative text of the logo.
 * @param {string} imageLink - This is the link of the logo on click.
 * @param {string} leftText - This is the text on the nearest right of the logo.
 * @param {string} rightText - This is the text on the furthest right of the logo.
 */

const Logo = ({ 
  imageSrc, 
  imageAlt,
  imageLink,
  leftText,
  rightText
}: LogoProps): JSX.Element => {
  return (
    <StyleWrapper className='logo'>
      <a 
        className='logo__img'
        href={imageLink}
      >
        <img src={imageSrc} alt={imageAlt} height={80} width={203}/>
      </a>

      <div className='logo__labels'>
        <p>{leftText}</p>
        <p>{rightText}</p>
      </div>
    </StyleWrapper>
  );
};

const LogoStyles = css`
  &.logo {
    display: flex;
    align-items: center;
    padding: 8px 12px 0;

    @media (min-width: 992px) {
      align-items: flex-start;
      padding: 15px 12px;
    }
  }

  .logo__img {
    text-decoration: none;
    flex: 1;

    @media (min-width: 992px) {
      flex: none;
    }

    img {
      max-width: 145px;
      height: 57px;
      margin-right: auto;
      cursor: pointer;

      @media (min-width: 992px) {
        max-width: 203px;
        height: 80px;
        margin-right: 48px;
      }
    }
  }

  .logo__labels {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 992px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  .logo__labels p:first-child {
    margin-bottom: 7px;
    font-size: 12px;
    line-height: 12px;
    color: var(--dark-pink);

    @media (min-width: 992px) {
      max-width: 159px;
      margin-bottom: 0;
    }
  }

  .logo__labels p:last-child {
    text-transform: capitalize;
    color: var(--grey-200);
    font-size: 12px;
    line-height: 14px;
    font-family: var(--font-primary-medium);
    margin: 0;
  }
`;

const StyleWrapper = styled.div<{ className?: string }>`
  ${LogoStyles}
`;

export default Logo;
