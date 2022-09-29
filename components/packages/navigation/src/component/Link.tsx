import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

export interface LinkProps {
  label: string;
  path: string;
  target?: '_blank' | '_self';
  selected?: boolean;
}

/**
 * Navigation link component
 * @param {string} label - This is the label of the link item.
 * @param {string} path - This is the path used in the href of the anchor tag.
 * @param {string} target - This is used to determine if the link opens in a new tab or on the current tab. It defaults to _self.
 * @param {boolean} selected - This is used to determine if the link is active or inactive. It defaults to false.
 */

const Link = ({
  label,
  path,
  target = '_self',
  selected = false
}: LinkProps): JSX.Element => {
  const linkActive = selected ? 'link--active ' : '';


  /**
 * Center active navigation link in mobile viewport 
 */
  useEffect (() => {
    const activeLink: any = document.querySelector('.link--active');
    activeLink.scrollIntoView({behavior: 'smooth', inline: 'center'});
  },[linkActive]);

  return (
    <StyleWrapper
      className={['link', linkActive].join(' ')}
      href={path}
      target={target}
    >
      {label}
    </StyleWrapper>
  );
};

const LinkStyles = css`
  &.link {
    padding: 7px;
    border-radius: 4px;
    text-decoration: none;
    text-transform: capitalize;
    font-family: var(--font-primary-medium);
    font-size: 13px;
    line-height: 17px;
    color: var(--grey-900);
    background-color: var(--grey-300);
    border: 2px solid var(--grey-300);
    cursor: pointer;
    transition: all .3s ease-in-out;
    
    &:hover {
      text-decoration: none;
      background-color: transparent;
      border-color: var(--grey-200);
    }

    @media (min-width: 992px) {
      font-size: 14px;
    }
  }

  &.link--active {
    background-color: var(--dark-pink);
    border-color: var(--dark-pink);
    color: var(--white);

    &:hover {
      background-color: var(--dark-pink);
      border-color: var(--dark-pink);
      color: var(--white);
    }
  }
`;

const StyleWrapper = styled.a<{ className?: string }>`
  ${LinkStyles}
`;

export default Link;
