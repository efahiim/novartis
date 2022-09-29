import React from 'react';
import { render } from '@testing-library/react';
import Header, { HeaderProps } from '../src/component/Header';

const props: HeaderProps = {
  logo: {
    imageSrc: '/assets/images/logo.png',
    imageAlt: 'Cosentyx',
    imageLink: '/',
    leftText: '[For people 6+ with moderate to severe plaque psoriasis.]',
    rightText: 'For US Residents',
  },
  dropdown: {
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
};

describe('<Header />', () => {
  const component = <Header {...props} />;
  test('Render the component', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('header')).toBeTruthy();
  });
});
