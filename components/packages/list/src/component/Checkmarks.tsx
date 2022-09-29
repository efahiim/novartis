import React from 'react';
import styled, { css } from 'styled-components';

export interface CheckmarksProps {
  list: string[]
}

/**
 * Checkmarks component
 * @param {string[]} list - A list with checkmarks.
*/

const Checkmarks = ({ list }: CheckmarksProps): JSX.Element => {
  return (
    <StyleWrapper
      data-testid="checkmarks"
      className='checkmarks'
    >
      {list.map((item, index) => {
        return (
          <li className='checkmarks__item' key={index}>{item}</li>
        );
      })}
    </StyleWrapper>
  );
};

const CheckmarksStyles = css`
  &.checkmarks {
    list-style-type: none;

    .checkmarks__item {
      position: relative;
      font-family: var(--font-primary);
      font-size: 16px;
      text-align: left;
      color: var(--grey-900);
      line-height: 22px;
      margin: 10px 0;

      &::before {
        content: '';
        width: 20px;
        height: 20px;
        background-color: var(--dark-pink);
        position: absolute;
        top: 1px;
        left: 0;
        border-radius: 3px;
        margin-left: -30px;
      }

      &::after {
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 24 24' width='18px' height='18px'%3E%3Cpath d='M9 19.4L3.3 13.7 4.7 12.3 9 16.6 20.3 5.3 21.7 6.7z'/%3E%3C/svg%3E");
        position: absolute;
        top: 2px;
        left: 1px;
        margin-left: -30px;
      }
    }
  }
`;

const StyleWrapper = styled.ul<{ className?: string }>`${CheckmarksStyles}`;

export default Checkmarks;
