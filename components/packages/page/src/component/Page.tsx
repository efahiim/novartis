import React from 'react';
import styled, { css } from 'styled-components';
import { Header } from '@components/header';
import { Link, Navigation } from '@components/navigation';
import { Carousel, MainCarousel } from '@components/carousel';
import { BackToTopButton, NextSectionButton } from '@components/buttons';
import { Footer } from '@components/footer';
import { NavigationHelp } from '@components/navigation-help';
import { InlineMenu } from '@components/inline-menu';
import { Collapsible } from '@components/collapsible';

const Page = (): JSX.Element => {

  /**
 * Store all navigation links in an array 
 */
  const navigationLink = [
    <Link
      label='Get The Fact'
      path='https://www.google.com'
      selected={true}
      target='_self'
      key={1}
    />,
    <Link
      label='Real Relief'
      path='https://www.google.com'
      selected={false}
      target='_self'
      key={2}
    />,
    <Link
      label='COSENTYX Experience'
      path='https://www.google.com'
      selected={false}
      target='_self'
      key={3}
    />,
    <Link
      label='Appointment Prep'
      path='https://www.google.com'
      selected={false}
      target='_self'
      key={4}
    />,
    <Link
      label='Savings Options'
      path='https://www.google.com'
      selected={false}
      target='_self'
      key={5}
    />,
    <Link
      label='Personal Support'
      path='https://www.google.com'
      selected={false}
      target='_self'
      key={6}
    />,
  ];

  return (
    <StyleWrapper className='page'>
      <Header
        logo={
          {
            imageSrc: '/assets/images/logo.png',
            imageAlt: 'Cosentyx',
            imageLink: '/',
            leftText: '[For people 6+ with moderate to severe plaque psoriasis.]',
            rightText: 'For US Residents',
          }
        }
        dropdown={
          {
            title: 'Prescribing & Patient Information',
            items: [
              {
                label: 'FDA Prescribing Information',
                path: 'https://www.novartis.us/sites/www.novartis.us/files/cosentyx.pdf',
              },
              {
                label: 'Medication guide',
                path: 'https://www.novartis.us/sites/www.novartis.us/files/cosentyx_pmg.pdf',
              },
              {
                label: 'Instructions for Use - Prefilled Syringe 75 mg',
                path: 'https://www.novartis.us/sites/www.novartis.us/files/cosentyx.pdf#page=34',
              },
              {
                label: 'Instructions for Use - Prefilled Syringe 150 mg',
                path: 'https://www.novartis.us/sites/www.novartis.us/files/cosentyx.pdf#page=30',
              },
              {
                label: 'Instructions for Use - Sensoready® pen 150 mg',
                path: 'https://www.novartis.us/sites/www.novartis.us/files/cosentyx.pdf#page=38',
              },
            ],
          }
        }
      />

      <Navigation
        links={
          navigationLink
        }
      />

      <section id="primary">
        <InlineMenu navLinks={
          {
            links: navigationLink
          }
        }
        />
        {/* <MainCarousel
          carousels={
            [
              <Carousel length={5} direction='rtl' isMain={false} key={1} />,
              <Carousel length={1} isMain={true} key={2} />,
              <Carousel length={5} direction='ltr' isMain={false} key={3} />,
            ]
          }
        /> */}
      </section>

      <div className='next-section'>
        <NextSectionButton sectionId='behavioral' />
      </div>

      <section id="behavioral">
        <InlineMenu navLinks={
          {
            links: navigationLink
          }
        }
        />

        {/* <MainCarousel
          rightButtonLabel='Swipe To Start'
          carousels={
            [
              <Carousel length={1} isMain={true} key={1} />,
              <Carousel length={5} direction='ltr' isMain={false} key={2} />,
            ]
          }
        /> */}
      </section>

      <div className='next-section'>
        <NextSectionButton sectionId='engagement' />
      </div>

      <section id="engagement">
        <InlineMenu navLinks={
          {
            links: navigationLink
          }
        }
        />
        {/* <MainCarousel
          rightButtonLabel='Swipe To Start The Quiz'
          carousels={
            [
              <Carousel length={1} isMain={true} key={1} />,
              <Carousel length={5} direction='ltr' isMain={false} key={2} />,
            ]
          }
        /> */}
      </section>

      <div className='next-section'>
        <NextSectionButton sectionId='next-best-action' />
      </div>

      <section id="next-best-action">
        <InlineMenu navLinks={
          {
            links: navigationLink
          }
        }
        />
        {/* <Carousel
          length={5}
          isMain={false}
          direction='ltr'
        /> */}
      </section>

      <BackToTopButton />
      <NavigationHelp />

      {/* <Collapsible 
        isiTitle='IMPORTANT SAFETY INFORMATION'
        isiTopText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo fermentum augue, ut imperdiet purus sollicitudin et. Curabitur nec tristique enim. Pellentesque libero nunc, ornare eget malesuada at, dapibus sed dolor. Phasellus lacus dolor, convallis nec commodo eget, auctor eget leo. Integer quis augue imperdiet, eleifend odio sed, hendrerit sapien. Curabitur viverra feugiat lectus, non dapibus dolor rhoncus vitae. Pellentesque porttitor lorem non ex laoreet blandit. Maecenas semper arcu ut quam lobortis, sed lobortis elit porttitor. Proin consectetur lectus ligula, vel ornare nunc vehicula eu. Ut vulputate nibh vitae dui posuere eleifend. Suspendisse ac quam ac metus maximus pellentesque a id mi. Nulla eu nisl massa. Nam quis nibh at magna facilisis faucibus nec in ipsum. Integer libero metus, accumsan non posuere ut, placerat vitae eros. Suspendisse convallis, sapien ut viverra sodales, eros odio imperdiet ante, a dapibus enim erat ut felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo fermentum augue, ut imperdiet purus sollicitudin et. Curabitur nec tristique enim. Pellentesque libero nunc, ornare eget malesuada at, dapibus sed dolor. Phasellus lacus dolor, convallis nec commodo eget, auctor eget leo.'
        indicationTitle='INDICATIONS'
        indicationText='indication ,Lorem ipsum dolor sit amet orem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo fermentum augue, ut imperdiet purus sollicitudin et. Curabitur nec tristique enim. Lorem ipsum dolor sit amet orem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo fermentum augue, ut imperdiet purus sollicitudin et. Curabitur nec tristique enim.'
        isiBottomText='Part two, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo fermentum augue, ut imperdiet purus sollicitudin et. Curabitur nec tristique enim. Pellentesque libero nunc, ornare eget malesuada at, dapibus sed dolor. Phasellus lacus dolor, convallis nec commodo eget, auctor eget leo. Integer quis augue imperdiet, eleifend odio sed, hendrerit sapien. Curabitur viverra feugiat lectus, non dapibus dolor rhoncus vitae. Pellentesque porttitor lorem non ex laoreet blandit. Maecenas semper arcu ut quam lobortis, sed lobortis elit porttitor. Proin consectetur lectus ligula, vel ornare nunc vehicula eu. Ut vulputate nibh vitae dui posuere eleifend. Suspendisse ac quam ac metus maximus pellentesque a id mi. Nulla eu nisl massa. Nam quis nibh at magna facilisis faucibus nec in ipsum. Integer libero metus, accumsan non posuere ut, placerat vitae eros. Suspendisse convallis, sapien ut viverra sodales, eros odio imperdiet ante, a dapibus enim erat ut felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo fermentum augue, ut imperdiet purus sollicitudin et. Curabitur nec tristique enim. Pellentesque libero nunc, ornare eget malesuada at, dapibus sed dolor. Phasellus lacus dolor, convallis nec commodo eget, auctor eget leo. Integer quis augue imperdiet, eleifend odio sed, hendrerit sapien. Curabitur viverra feugiat lectus, non dapibus dolor rhoncus vitae. Pellentesque porttitor lorem non ex laoreet blandit. Maecenas semper arcu ut quam lobortis, sed lobortis elit porttitor. Proin consectetur lectus ligula, vel ornare nunc vehicula eu. Ut vulputate nibh vitae dui posuere eleifend. Suspendisse ac quam ac metus maximus pellentesque a id mi. Nulla eu nisl massa. Nam quis nibh at magna facilisis faucibus nec in ipsum. Integer libero metus, accumsan non posuere ut, placerat vitae eros. Suspendisse convallis, sapien ut viverra sodales, eros odio imperdiet ante, a dapibus enim erat ut felis.'
      /> */}

      <Footer
        footerLinks={
          {
            firstLinksCollection: [
              {
                label: 'COSENTYX Home',
                path: 'https://www.google.com',
                target: '_self'
              },
              {
                label: 'COSENTYX About',
                path: 'https://www.google.com',
                target: '_self'
              },
              {
                label: 'COSENTYX Contact',
                path: 'https://www.google.com',
                target: '_self'
              },
            ],
            secondLinksCollection: [
              {
                label: 'COSENTYX Home',
                path: 'https://www.google.com',
                target: '_self'
              },
              {
                label: 'COSENTYX Contact',
                path: 'https://www.google.com',
                target: '_self'
              },
            ],
            thirdLinksCollection: [
              {
                label: 'COSENTYX Home',
                path: 'https://www.google.com',
                target: '_self'
              },
            ],
            fourthLinksCollection: [
              {
                label: 'COSENTYX Home',
                path: 'https://www.google.com',
                target: '_self'
              },
              {
                label: 'COSENTYX Home',
                path: 'https://www.google.com',
                target: '_self'
              },
              {
                label: 'COSENTYX Home',
                path: 'https://www.google.com',
                target: '_self'
              },
              {
                label: 'COSENTYX Home',
                path: 'https://www.google.com',
                target: '_self'
              },
            ]
          }
        }
        socialLinks={
          [
            {
              type: 'facebook',
              href: 'https://www.facebook.com',
            },
            {
              type: 'twitter',
              href: 'https://www.twitter.com',
            },
            {
              type: 'instagram',
              href: 'https://www.instagram.com',
            },
            {
              type: 'youtube',
              href: 'https://www.youtube.com',
            },
          ]
        }
        copyrightImg='https://www.cosentyx.com/themes/custom/novartis_cs_cosentyx/novartis-logo.svg'
      />
    </StyleWrapper>
  );
};

const PageStyles = css`
  &.page {
    background-color: var(--grey-100);
  }

  .navigation {
    display: none;

    @media (min-width: 992px) {
    display: flex;
    }
  }

  .inline-menu {
    display: block;
    
    .navigation {
      display: flex;

      @media (min-width: 992px) {
        display: none;
      }
    }

    @media (min-width: 992px) {
      display: none;
    }
  }

  .next-section {
    margin-top: -68px;
    margin-bottom: 40px;

    @media (min-width: 992px) {
      margin-top: 60px;
      margin-bottom: 15px;
    }

  }

  .footer {
    margin-top: 70px;
  }
`;

const StyleWrapper = styled.article`
  ${PageStyles}
`;

export default Page;
