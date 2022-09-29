import React from 'react';
import styled, { css } from 'styled-components';

export interface SocialMediaIconProps {
  type: ('facebook' | 'twitter' | 'youtube' | 'instagram');
  href: string;
  colorOnHover?: 'pink' | 'purple';
}

interface SocialMediaIconSvgProps {
  facebook: JSX.Element;
  twitter: JSX.Element;
  youtube: JSX.Element;
  instagram: JSX.Element;
}

const contentIconsSvg : SocialMediaIconSvgProps = {
  facebook : (
    <svg id="facebook-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="30" height="30" role="img" aria-labelledby="svgTitle svgDesc">
      <title id="svgTitle">Facebook icon</title>
      <desc id="svgDesc">An icon illustrating a facebook social media</desc>
      <path d="M13,0C5.82,0,0,5.82,0,13c0,6.518,4.801,11.899,11.057,12.839v-9.394H7.84v-3.417h3.217v-2.274 c0-3.765,1.834-5.417,4.963-5.417c1.498,0,2.291,0.111,2.666,0.162v2.983h-2.134c-1.328,0-1.792,1.259-1.792,2.679v1.868h3.893 l-0.528,3.417H14.76v9.422C21.105,25.006,26,19.581,26,13C26,5.82,20.18,0,13,0z"/>
    </svg>
  ),
  twitter : (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="30" height="30" role="img" aria-labelledby="svgTitle svgDesc">
      <title id="svgTitle">Twitter icon</title>
      <desc id="svgDesc">An icon illustrating a twitter social media</desc>
      <path d="M 25.855469 5.574219 C 24.914063 5.992188 23.902344 6.273438 22.839844 6.402344 C 23.921875 5.75 24.757813 4.722656 25.148438 3.496094 C 24.132813 4.097656 23.007813 4.535156 21.8125 4.769531 C 20.855469 3.75 19.492188 3.113281 17.980469 3.113281 C 15.082031 3.113281 12.730469 5.464844 12.730469 8.363281 C 12.730469 8.773438 12.777344 9.175781 12.867188 9.558594 C 8.503906 9.339844 4.636719 7.246094 2.046875 4.070313 C 1.59375 4.847656 1.335938 5.75 1.335938 6.714844 C 1.335938 8.535156 2.261719 10.140625 3.671875 11.082031 C 2.808594 11.054688 2 10.820313 1.292969 10.425781 C 1.292969 10.449219 1.292969 10.46875 1.292969 10.492188 C 1.292969 13.035156 3.101563 15.15625 5.503906 15.640625 C 5.0625 15.761719 4.601563 15.824219 4.121094 15.824219 C 3.78125 15.824219 3.453125 15.792969 3.132813 15.730469 C 3.800781 17.8125 5.738281 19.335938 8.035156 19.375 C 6.242188 20.785156 3.976563 21.621094 1.515625 21.621094 C 1.089844 21.621094 0.675781 21.597656 0.265625 21.550781 C 2.585938 23.039063 5.347656 23.90625 8.3125 23.90625 C 17.96875 23.90625 23.25 15.90625 23.25 8.972656 C 23.25 8.742188 23.246094 8.515625 23.234375 8.289063 C 24.261719 7.554688 25.152344 6.628906 25.855469 5.574219"/>
    </svg>
  ),
  youtube : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="6 12 37.999 25.999" width="36" height="36" role="img" aria-labelledby="svgTitle svgDesc">
      <title id="svgTitle">Youtube icon</title>
      <desc id="svgDesc">An icon illustrating a youtube social media</desc>
      <path d="M42.042 13.855C43.773 15.576 43.999 18.311 43.999 25.001s-0.226 9.423 -1.959 11.143C40.311 37.863 38.508 37.999 25.001 37.999S9.688 37.863 7.959 36.144S6 31.689 6 25.001s0.226 -9.423 1.959 -11.143S11.491 12 25.001 12S40.311 12.136 42.042 13.855zM21.761 30.933l9.717 -5.63L21.761 19.759V30.933z"/>
    </svg>
  ),
  instagram : (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="30" height="30" role="img" aria-labelledby="svgTitle svgDesc">
      <title id="svgTitle">Instagram icon</title>
      <desc id="svgDesc">An icon illustrating a instagram social media</desc>
      <path d="M 7.546875 0 C 3.390625 0 0 3.390625 0 7.546875 L 0 18.453125 C 0 22.609375 3.390625 26 7.546875 26 L 18.453125 26 C 22.609375 26 26 22.609375 26 18.453125 L 26 7.546875 C 26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2 L 18.453125 2 C 21.527344 2 24 4.46875 24 7.546875 L 24 18.453125 C 24 21.527344 21.53125 24 18.453125 24 L 7.546875 24 C 4.472656 24 2 21.53125 2 18.453125 L 2 7.546875 C 2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4 C 19.671875 4 19 4.671875 19 5.5 C 19 6.328125 19.671875 7 20.5 7 C 21.328125 7 22 6.328125 22 5.5 C 22 4.671875 21.328125 4 20.5 4 Z M 13 6 C 9.144531 6 6 9.144531 6 13 C 6 16.855469 9.144531 20 13 20 C 16.855469 20 20 16.855469 20 13 C 20 9.144531 16.855469 6 13 6 Z M 13 8 C 15.773438 8 18 10.226563 18 13 C 18 15.773438 15.773438 18 13 18 C 10.226563 18 8 15.773438 8 13 C 8 10.226563 10.226563 8 13 8 Z"/>
    </svg>
  )
};

/**
 * Standard icon component
 * @param {string} type - This is the type of the icon.
 * @param {string} href - This is the href of the social media.
 * @param {Function} onClick - This is a function of type React.MouseEventHandler that is called when the icon is clicked.
 * @param {Function} onKeyDown - This is a function of type React.KeyboardEventHandler that is called when the icon is pressed with Spacebar or Enter key.
*/

const SocialMediaIcon = ({ type, href, colorOnHover = 'pink' }: SocialMediaIconProps): JSX.Element => {
  const content = contentIconsSvg[type];
  return (
    <StyleWrapper
      data-testid="social-media-icon"
      className={['social-media-icon', `social-media-icon--${colorOnHover}`].join(' ')}
      target='_blank'
      rel='noopener nofollow'
      href={href}
    >
      {content}
    </StyleWrapper>
  );
};

const SocialMediaIconStyles = css`
  &.social-media-icon {
    text-decoration: none;
    color: var(--grey-200);
    outline: none;
    border: none;

    svg {
      display: block;
      fill: var(--grey-200);
    }

    &--pink {
      &:hover {
        svg {
          fill: var(--dark-pink);
        }
      }
    }

    &--purple {
      &:hover {
        svg {
          fill: var(--dark-purple);
        }
      }
    }
  }
`; 

const StyleWrapper = styled.a<{className?:string}>`${SocialMediaIconStyles}`;

export default SocialMediaIcon;
