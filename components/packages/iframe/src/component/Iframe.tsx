import React from 'react';
import styled, { css } from 'styled-components';

export interface IframeProps {
  url: string;
}

/**
 * Iframe Component
 * @param {string} url - REQUIRED: The URL of the content of the iframe (usually a video).
 */

const Iframe = ({ 
  url
}: IframeProps): JSX.Element => {
  return (
    <StyleWrapper className='iframe'>
      <iframe src={url} width="100%" height="400"></iframe>
    </StyleWrapper>
  );
};

const IframeStyles = css`
  &.iframe {
    width: 100%;
    height: 100%;
    
    iframe {
      border: 0;
    }
  }
`;

const StyleWrapper = styled.div<{ className?: string }>`
  ${IframeStyles}
`;

export default Iframe;
