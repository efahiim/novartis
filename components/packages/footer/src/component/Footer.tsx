import React from 'react';
import styled, { css } from 'styled-components';
import { FooterLinks, FooterLinksProps } from '@components/footer-links';
import { SocialMediaIcon, SocialMediaIconProps } from '@components/icons';
import { RichText, RichTextProps } from '@components/rich-text';

export interface FooterProps {
  footerLinks: FooterLinksProps;
  socialLinks: SocialMediaIconProps[];
  copyrightImg: string;
  copyrightTerms?: RichTextProps;
  copyrightDisclaimer?: RichTextProps;
}

/**
 * Footer component
 * @param {FooterLinksProps} footerLinks - REQUIRED: This component takes in all the navigation links for the footwer.
 * @param {SocialMediaIconProps[]} socialLinks - REQUIRED: This component takes in an array of all the social icons in the footer
 * @param {string} copyrightImg - REQUIRED: This prop is the url of the copyright image in the footer.
 * @param {RichTextProps} copyrightTerms - OPTIONAL: This prop is the terms and conditions text.
 * @param {RichTextProps} copyrightDisclaimer - OPTIONAL: This prop is the disclaimer text just below the Novartis logo in the footer.
 */

const Footer = ({
  footerLinks,
  socialLinks,
  copyrightImg,
  copyrightTerms,
  copyrightDisclaimer
}: FooterProps): JSX.Element => {
  return (
    <StyleWrapper 
      className='footer'
      data-testid='footer'  
    >
      <div className='footer__navigation'>
        <FooterLinks
          firstLinksCollection={footerLinks.firstLinksCollection}
          secondLinksCollection={footerLinks.secondLinksCollection}
          thirdLinksCollection={footerLinks.thirdLinksCollection}
          fourthLinksCollection={footerLinks.fourthLinksCollection}
        />
        <ul className='footer__socials'>
          {
            socialLinks.map((icon, index) => {
              return (
                <li key={index}>
                  <SocialMediaIcon type={icon.type} href={icon.href}
                  />
                </li>
              );
            })
          }
        </ul>
      </div>
      <div className='footer__copyright'>
        <>
          {copyrightTerms && <div className='copyright__terms'><RichText json={copyrightTerms?.json}></RichText></div>}
          <img src={copyrightImg} className='copyright__img' alt='Novartis Footer Logo' width={220} height={35} />
          {copyrightDisclaimer && <div className='copyright__disclaimer'><RichText json={copyrightDisclaimer?.json}></RichText></div>}
        </>
      </div>
    </StyleWrapper>
  );
};

const FooterStyles = css`   
  &.footer{
    background-color: var(--grey-100);
    padding: 20px 0;
    max-width: 83%;
    margin: 0 auto;

    @media (min-width: 992px) {
      padding: 30px 30px 140px 30px;
    }
  }

  .footer__navigation {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 45px;

    @media (min-width: 992px) {
      flex-direction: row;
    }
  }

  .footer-links {
    width: 100%;
    margin-bottom: 15px;
    
    @media (min-width: 992px) {
      width: 80%;
      margin: 0;
    }
  }

  .footer__socials {
    display: flex;
    gap: 20px;
    height: fit-content;
    align-items: center;

    li::before{
      display: none;
    }
  }

  .copyright__terms {
    padding: 38px 0;
    margin-bottom: 44px;
    border-bottom: 1px solid var(--grey-200);
    border-top: 1px solid var(--grey-200);
    font-size: 14px;
    line-height: 22px;
    font-family: var(--font-primary);
    color: var(--grey-900);

    @media (width: 992px){
      padding: 56px 0;
    }

    a {
      text-decoration: none;
      color: var(--grey-900);
    }
  }

  .copyright__img{
    max-width: 295px;
    margin-bottom: 29px;

    @media (min-width: 992px) {
      max-width: 220px;
      margin-bottom: 18px;
    }
  }

  .copyright__disclaimer {
    font-size: 14px;
    
    @media (min-width: 992px) {
      margin-left: 50px;
    }
  }
`;

const StyleWrapper = styled.footer<{ className?: string }>`
  ${FooterStyles}
`;

export default Footer;
