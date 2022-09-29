import React from 'react';
import styled, { css } from 'styled-components';

interface ListProps {
  path: string;
  label: string;
  target?: '_blank' | '_self';
}

export interface DropdownProps {
  items: ListProps[];
  title: string;
}

/**
 * Dropdown menu component
 * @param {string} title - This is the title of the dropdown.
 * @param {string} path - This is the path of the items in the dropdown.
 * @param {string} label - This is the text of the items.
 * @param {string} target - This is to specify where to open the linked documents.
 */

const Dropdown = ({ items, title }: DropdownProps): JSX.Element => {
  return (
    <StyleWrapper className='dropdown' data-testid='dropdown'>
      <li className='dropdown__menu'>
        <div className='dropdown__title'>
          <span className='title'>{title}</span>
          <i className='arrow-down'></i>
        </div>
        <ul className='dropdown__content'>
          {items.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.path} target={item.target || '_blank'}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </li>
    </StyleWrapper>
  );
};

const DropdownMenuStyles = css`
  &.dropdown {
    background-color: var(--grey-100);
    padding: 12px 30px 12px 0;

    @media (min-width: 992px) {
      background-color: transparent;
      padding: 15px 30px 0;
    }
  }

  &.dropdown li::before {
    display: none;
  }

  .dropdown__menu {
    position: relative;
    width: fit-content;
    margin-left: 30px;
    cursor: pointer;

    @media (min-width: 992px) {
      margin-left: 0;
    }
  }

  .dropdown__title {
    display: flex;
    align-items: center;
    gap: 7px;
  }

  .title {
    color: var(--dark-pink);
    font-family: var(--font-primary-medium);
    text-transform: capitalize;
    font-size: 14px;
    line-height: 17px;

    @media (min-width: 992px) {
      font-size: 12px;
      line-height: 14px;
      padding: 0;
    }
  }

  .arrow-down {
    border: solid var(--dark-pink);
    border-width: 0 1px 1px 0;
    padding: 2px;
    transform: rotate(45deg);
  }

  .dropdown__content {
    display: none;
    position: absolute;
    margin: 0;
    padding: 0;
    top: 100%;
    left: 0;
    list-style: none;
    background-color: var(--white);
    box-shadow: -1px 1px 1px 1px rgba(0,0,0,0.05);
    z-index: 99;
  }

  .dropdown__menu:hover > .dropdown__content {
    display: block;
  }

  .dropdown__content a {
    display: block;
    padding: 12px 16px;
    font-size: 12px;
    line-height: 14px;
    color: var(--grey-200);
    text-decoration: none;
    white-space: nowrap;
  }

  .dropdown__content a:hover {
    background-color: var(--grey-100);
    color: var(--dark-pink);
  }
`;

const StyleWrapper = styled.ul<{ className?: string }>`
  ${DropdownMenuStyles}
`;

export default Dropdown;
