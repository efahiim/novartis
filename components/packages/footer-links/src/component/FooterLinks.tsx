import React from 'react';
import styled, { css } from 'styled-components';

export interface FooterLinksProps {
  firstLinksCollection: Link[];
  secondLinksCollection: Link[];
  thirdLinksCollection: Link[];
  fourthLinksCollection: Link[];
}

interface Link {
  label: string;
  path: string
  target?: '_blank' | '_self';
}

/**
 * Footer links component
 * @param {Link[]} firstLinksCollection - This component takes in an array for the footer column list 1.
 * @param {Link[]} secondLinksCollection - This component takes in an array for the footer column list 2.
 * @param {Link[]} thirdLinksCollection - This component takes in an array for the footer column list 3.
 * @param {Link[]} fourthLinksCollection - This component takes in an array for the footer column list 4.
 */

const FooterLinks = ({
  firstLinksCollection,
  secondLinksCollection,
  thirdLinksCollection,
  fourthLinksCollection
}: FooterLinksProps): JSX.Element => {
  return (
    <StyleWrapper
      className='footer-links'
      data-testid='footer-links'
    >
      {
        [firstLinksCollection, secondLinksCollection, thirdLinksCollection, fourthLinksCollection].map((collection, index) => {
          return (
            <li className='footer-links__list' key={index}>
              <ul>
                {
                  collection.map((item: Link, index: number) => {
                    return (
                      <li className='footer-links__item' key={index}>
                        <a href={item.path} target={item.target}>
                          {item.label}
                        </a>
                      </li>
                    );
                  })
                }
              </ul>
            </li>
          );
        })
      }
    </StyleWrapper>
  );
};

const FooterLinksStyles = css`
  &.footer-links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    li::before {
      display: none;
    }

    @media (min-width: 992px) {
      flex-direction: row;
    }
  }

  .footer-links__list {
    margin-bottom: 0;
  }

  .footer-links__item {
    margin-bottom: 10px;

    @media (min-width: 992px) {
      margin-bottom: 18px;
    }

    a {
      text-transform: capitalize;
      text-decoration: none;
      font-family: var(--font-primary-medium);
      font-size: 13px;
      line-height: 17px;
      color: var(--grey-900);
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }

        @media (min-width: 992px) {
          font-size: 14px;
       }
    }
  }
`;

const StyleWrapper = styled.ul<{ className?: string }>`
  ${FooterLinksStyles}
`;

export default FooterLinks;
