import React from 'react';
import styled, { css } from 'styled-components';

export interface NavigationProps {
  links: React.ReactElement[];
}

/**
 * Navigation component
 * @param {React.ReactElement[]} links - This component takes in an array of <Link> components.
 */

const Navigation = ({ links }: NavigationProps): JSX.Element => {
  return (
    <StyleWrapper
      data-testid='navigation'
      className='navigation'
    >
      {links.map((link, index) => {
        return (
          <span className='navigation__link' key={index}>
            {link}
          </span>
        );
      })}
    </StyleWrapper>
  );
};

const NavigationStyles = css`
  &.navigation {
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: none;
    height: 42px;
    margin-top: 40px;
    margin-bottom: 20px;
    position: relative;

    @media (min-width: 992px) {
      display: flex;
      justify-content: center;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    

    .navigation__link {
      display: inline-block;
      margin-top: 10px;
      margin-inline-end: 10px;

      &:last-child {
        margin-inline-end: 0;
      }

      @media (min-width: 992px) {
        margin-inline-end: 30px;
      }
    }
  }
`;

const StyleWrapper = styled.div<{ className?: string }>`${NavigationStyles}`;

export default Navigation;
