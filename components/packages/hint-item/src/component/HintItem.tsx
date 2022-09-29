import React from 'react';
import styled, { css } from 'styled-components';

export interface HintItemProps {
  label: string;
}

const phoneIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="299.322" height="79.089" viewBox="0 0 299.322 79.089" role="img" aria-labelledby="svgTitle svgDesc">
    <title id="svgTitle">Phone icon</title>
    <desc id="svgDesc">A hand holding a phone</desc>
    <g data-name="Group 1098" clipPath="url(#clip-path)">
      <g data-name="Group 1097">
        <g data-name="Group 1096" clipPath="url(#clip-path-2)">
          <path data-name="Path 829" d="M29.704 54.82a4.874 4.874 0 0 0-4.039-2.144H13.497c-2.7 0-7.537-3.211-7.537-.516l1.034 3.684c2.755 5.784 3.807 6.591 6.5 6.591h.036v14.874h17.01V54.82Z" fill="#ebc19c"/>
          <path data-name="Rectangle 1823" fill="#41566b" d="M2.897 13.301h26.341v33.881H2.897z"/>
          <path data-name="Rectangle 1824" fill="#daeff1" d="M5.01 13.301h22.114v33.881H5.01z"/>
          <path data-name="Path 830" d="M29.238 47.182v4.721a2.508 2.508 0 0 1-2.5 2.5H5.395a2.508 2.508 0 0 1-2.5-2.5v-4.721Z" fill="#41566b"/>
          <path data-name="Path 831" d="M29.238 9.41v3.891H2.897V9.41a2.506 2.506 0 0 1 2.5-2.5h21.342a2.507 2.507 0 0 1 2.5 2.5" fill="#41566b"/>
          <path data-name="Path 832" d="M18.421 10.929h-4.627a.703.703 0 1 1 0-1.406h4.627a.703.703 0 1 1 0 1.406" fill="#fff"/>
          <path data-name="Path 833" d="M18.104 50.793a2.035 2.035 0 1 1-2.035-2.032 2.035 2.035 0 0 1 2.035 2.035" fill="#fff"/>
          <g data-name="Group 1092" opacity=".54">
            <g data-name="Group 1091">
              <g data-name="Group 1090" clipPath="url(#clip-path-3)" transform="translate(9.157 23.743)">
                <path data-name="Rectangle 1825" fill="#fff" d="M0 7.782 7.782 0l.663.664L.663 8.445z"/>
              </g>
            </g>
          </g>
          <g data-name="Group 1095" opacity=".54">
            <g data-name="Group 1094">
              <g data-name="Group 1093" clipPath="url(#clip-path-4)" transform="translate(9.157 23.331)">
                <path data-name="Rectangle 1827" fill="#fff" d="M.001 14.755 14.756-.001l.664.664L.664 15.418z"/>
              </g>
            </g>
          </g>
          <path data-name="Path 834" d="M34.297 46.4c.061-1.985-2-6.3-2-6.3a3.312 3.312 0 0 0-1.327-1.915l-5.111-3.552-1.668-1.1a2.06 2.06 0 0 0-2.857.583 4.553 4.553 0 0 0 1.374 6.289h.006l3.178 2.331.011-.017.289.2s.905 5.184.12 5.883c-4.178 4.384-6.139 10.847-6.018 11.749l.033.251a1.95 1.95 0 0 0 1.872 1.638h6.885a3.482 3.482 0 0 0 2.575-1.377l1.712-2.552a6.384 6.384 0 0 0 .925-3.023V46.4" fill="#ebc19c"/>
          <path data-name="Path 835" d="m3.115 25.25.027.014 2.475 1.239 1.8.871a1.614 1.614 0 0 1 .743 2.154 3.555 3.555 0 0 1-4.775 1.575l-2.5-1.228-.026-.011c-.9-.451-1.124-1.844-.489-3.115s1.849-1.921 2.752-1.5" fill="#ebc19c"/>
          <path data-name="Path 836" d="m3.115 32.4.027.014 2.474 1.24 1.8.871a1.614 1.614 0 0 1 .743 2.154 3.555 3.555 0 0 1-4.774 1.575l-2.5-1.229-.026-.011c-.9-.451-1.124-1.844-.489-3.115s1.849-1.921 2.752-1.5" fill="#ebc19c"/>
          <path data-name="Path 837" d="m3.115 39.55.027.014 2.474 1.242 1.8.87a1.614 1.614 0 0 1 .743 2.154 3.555 3.555 0 0 1-4.774 1.577L.878 44.173l-.026-.011c-.9-.449-1.124-1.844-.489-3.115.626-1.256 1.849-1.919 2.752-1.5" fill="#ebc19c"/>
          <path data-name="Path 838" d="m3.115 46.702.027.014 2.474 1.24 1.8.871a1.613 1.613 0 0 1 .743 2.153 3.555 3.555 0 0 1-4.774 1.577l-2.5-1.228-.026-.011c-.9-.451-1.124-1.845-.489-3.117.626-1.256 1.849-1.919 2.752-1.5" fill="#ebc19c"/>
          <path data-name="Path 839" d="M31.979 67.013H12.092a1.243 1.243 0 0 0-1.242 1.244v9.056h22.372v-9.056a1.243 1.243 0 0 0-1.243-1.244" fill="#592c63"/>
        </g>
      </g>
    </g>
  </svg>
);

/**
 * Hint Item component
 * @param {string} label - This is the text of the component.
 */

const HintItem = ({ label }: HintItemProps): JSX.Element => {
  return (
    <StyleWrapper
      data-testid="hint-item"
      className='hint-item'
    >
      <span className='hint-item__img'>{phoneIcon}</span>
      <p className='hint-item__text'>{label}</p>
    </StyleWrapper>
  );
};

const HintItemStyles = css`
  &.hint-item {
    position: relative;
    display: flex;
    align-items: center;
    margin: 30px 0;

    .hint-item__img {
      position: absolute;
      top: -10px;
      left: 0;

      @media (min-width: 992px){
        left: -15px;
      }
    }

    .hint-item__text {
      width: 300px;
      min-height: 63px;
      padding: 5px 0 5px 40px;
      font-size: 14px;
      line-height: 17px;
      text-align: left;
      font-family: var(--font-primary-medium);
      background-color: var(--grey-100);
      color: var(--dark-pink);
      word-wrap: break-word;
      display: flex;
      align-items: center;
    }
  }
`;

const StyleWrapper = styled.div<{ className?: string }>`${HintItemStyles}`;

export default HintItem;
