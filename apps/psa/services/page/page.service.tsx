/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
import React from 'react';
import { Carousel, Slide } from '@components/carousel';
import { Link } from '@components/navigation';
import { EntriesEventsType } from '@components/rich-text';

/**
 * Function to generate the header dropdown items.
 * @param {[]} items - REQUIRED: This is the array of CTA items received from Contentful which is passed in the function.
*/
export const generateHeaderDropdown = (items: []): any => {
  const dropdownItems: { label: string, path: string }[] = [];
  items.forEach((element: any) => {
    dropdownItems.push({
      label: element.label,
      path: element.url
    });
  });

  return dropdownItems;
};

/**
 * Function to generate the navigation items.
 * @param {[]} items - REQUIRED: This is the array of CTA items received from Contentful which is passed in the function.
*/
export const generateNavigationItems = (items: [], activePage: string): any => {
  const navigationItems: React.ReactElement[] = [];
  items.forEach((element: any, index: number) => {
    navigationItems.push(
      <Link
        label={element.title}
        path={element.slug}
        selected={element.title === activePage ? true : false}
        target='_self'
        key={index}
      />
    );
  });

  return navigationItems;
};

/**
 * [TEMPORARY] Function to generate the event of each button on the specific experience (page).
*/
const generateButtonEvents = (): EntriesEventsType => {
  const buttonEvents: EntriesEventsType = {
    cta: {
      ['Explore More'] : {
        onClick: (): void => {
          const currentLocation = document.location.toString();
          if (currentLocation.includes('psa-real-relief')) {
            location.href = 'https://nov-prospect-as-nonprod-dev.azurewebsites.net/psa-get-the-facts';
          } else location.href = 'https://nov-prospect-as-nonprod-dev.azurewebsites.net/psa-real-relief';
        }
      },
      ['Why a Biologic?'] : {
        onClick: (): void => {
          const locationUrl = document.location.toString().split('#')[0];
          const anchor = 'PSA Experience 1 - Next Best Action';
          document.location = locationUrl + '#' + anchor;
        }
      },
      ['Test Your Knowledge'] : {
        onClick: (): void => {
          console.log('Test Your Knowledge');
        }
      },
      ['Get Prepared'] : {
        onClick: (): void => {
          location.href = 'https://nov-prospect-as-nonprod-dev.azurewebsites.net/psa-appointment-prep';
        }
      },
      ['Find a Doctor'] : {
        onClick: (): void => {
          console.log('Find a Doctor');
        }
      },
      ['Start Tracking']: {
        onClick: (): void => {
          const locationUrl = 'https://nov-prospect-as-nonprod-dev.azurewebsites.net/psa-cosentyx-experience';
          const anchor = 'PSA Experience 3 - Engagement';
          document.location = locationUrl + '#' + anchor;
        }
      },
      ['Explore COSENTYX'] : {
        onClick: (): void => {
          location.href = 'https://nov-prospect-as-nonprod-dev.azurewebsites.net/psa-cosentyx-experience';
        }
      },
      ['Learn More'] : {
        onClick: (): void => {
          const currentLocation = document.location.toString();
          if (currentLocation.includes('psa-real-relief')) {
            location.href = 'https://nov-prospect-as-nonprod-dev.azurewebsites.net/psa-get-the-facts';
          } else location.href = 'https://nov-prospect-as-nonprod-dev.azurewebsites.net/psa-real-relief';
        }
      },
      ['See the Impact'] : {
        onClick: (): void => {
          console.log('See the Impact');
        }
      },
      ['Get Ready'] : {
        onClick: (): void => {
          console.log('Get Ready');
        }
      },
      ['Check Your Severity'] : {
        onClick: (): void => {
          console.log('Check Your Severity');
        }
      },
    }
  };

  return buttonEvents;
};

/**
 * Function to generate the slides with corresponding data. Note: A check is made for rightContent (Contentful).
 * @param {[]} items - REQUIRED: This is the array of slides received from Contentful for any carousel.
*/
export const generateSlides = (items: any): any => {
  const slides: React.ReactElement[] = [];
  const events: EntriesEventsType = generateButtonEvents();
  if (Array.isArray(items)) {
    items.map((element: any, index: number) => {
      if (element.rightContent !== null) {
        slides.push(
          <Slide
            title={element.title}
            leftContent={
              {
                json: element.leftContent.json,
                links: element.leftContent.links
              }
            }
            rightContent={
              {
                json: element.rightContent.json,
                links: element.rightContent.links
              }
            }
            events={events}
            slug={element.slug}
            key={index}
          />
        );
      } else {
        slides.push(
          <Slide
            title={element.title}
            leftContent={
              {
                json: element.leftContent.json,
                links: element.leftContent.links
              }
            }
            events={events}
            slug={element.slug}
            key={index}
          />
        );
      }
    });
  } else {
    if (items.rightContent !== null) {
      slides.push(
        <Slide
          title={items.title}
          leftContent={
            {
              json: items.leftContent.json,
              links: items.leftContent.links
            }
          }
          rightContent={
            {
              json: items.rightContent.json,
              links: items.rightContent.links
            }
          }
          events={events}
          slug={items.slug}
          key={1}
        />
      );
    } else {
      slides.push(
        <Slide
          title={items.title}
          leftContent={
            {
              json: items.leftContent.json,
              links: items.leftContent.links
            }
          }
          slug={items.slug}
          events={events}
          key={1}
        />
      );
    }
  }

  return slides;
};

/**
 * Function to compare the section slides data with screen data which were received in getStaticProps.
 * @param {[]} sectionSlides - REQUIRED: This is the array of slides or JSON of a single slide (middle screen) received from Contentful for any carousel.
 * @param {[]} screensData - REQUIRED: This is the array of slides received from Contentful for any carousel.
*/
export const generateSlidesData = (sectionSlides: any, screensData: any): any => {
  const sectionSlidesData: any[] = [];
  if (Array.isArray(sectionSlides)) {
    sectionSlides.map((element: any) => {
      screensData.find((item: any) => {
        if (element.slug === item.slug) {
          item.leftContent['json'] = element.leftContent.json;
          if (element.rightContent) item.rightContent['json'] = element.rightContent.json;
          sectionSlidesData.push(item);
        }
      });
    });
  } else {
    screensData.find((item: any) => {
      if (sectionSlides.slug === item.slug) {
        item.leftContent['json'] = sectionSlides.leftContent.json;
        if (sectionSlides.rightContent) item.rightContent['json'] = sectionSlides.rightContent.json;
        sectionSlidesData.push(item);
      }
    });
  }

  return sectionSlidesData;
};

/**
 * Function to generate the carousels.
 * @param {[]} leftCarouselSlides - REQUIRED: This is an array containing the slides of the left carousel which are received from Contentful.
 * @param {JSON} leftCarouselSlides - REQUIRED: This is the single slide of the middle carousel which is received from Contentful.
 * @param {[]} rightCarouselSlides - REQUIRED: This is an array containing the slides of the left carousel which are received from Contentful.
*/
export const generateCarousels = (leftCarouselSlides: [], middleCarouselSlides: JSON, rightCarouselSlides: []): React.ReactElement[] => {
  const carouselsArray: React.ReactElement[] = [];
  if (leftCarouselSlides.length !== 0) {
    carouselsArray.push(
      <Carousel
        slides={generateSlides(leftCarouselSlides)}
        isMain={false}
        direction='rtl'
      />
    );
  }
  carouselsArray.push(
    <Carousel
      slides={generateSlides(middleCarouselSlides)}
      isMain={true}
    />
  );
  if (rightCarouselSlides.length !== 0) {
    carouselsArray.push(
      <Carousel
        slides={generateSlides(rightCarouselSlides)}
        isMain={false}
        direction='ltr'
      />
    );
  }

  return carouselsArray;
};

/**
 * Function to generate the footer menu items.
 * @param {[]} items - REQUIRED: This is the array of CTA items received from Contentful which is passed in the function.
*/
export const generateFooterMenu = (items: []): any => {
  const menuItems: { label: string, path: string, target: string }[] = [];
  items.forEach((element: any) => {
    menuItems.push({
      label: element.label,
      path: element.url,
      target: '_self'
    });
  });

  return menuItems;
};

/**
 * Function to generate the footer social links.
 * @param {[]} items - REQUIRED: This is the array of CTA items received from Contentful which is passed in the function.
*/
export const generateFooterSocial = (items: []): any => {
  const socialItems: { type: string, href: string }[] = [];
  items.forEach((element: any) => {
    let socialType: string;
    switch(element.label) {
      case 'Facebook':
        socialType = 'facebook';
        break;
      case 'Twitter':
        socialType = 'twitter';
        break;
      case 'Youtube':
        socialType = 'youtube';
        break;
      case 'Instagram':
        socialType = 'instagram';
        break;
      default:
        socialType = 'facebook';
    }

    socialItems.push({
      type: socialType,
      href: element.url
    });
  });

  return socialItems;
};