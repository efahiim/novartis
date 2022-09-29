import React from 'react';
import { render } from '@testing-library/react';
import Logo, { LogoProps } from '../src/component/Logo';

const props: LogoProps = {
  imageSrc: '/assets/images/logo.png',
  imageAlt: 'Cosentyx',
  imageLink: '/',
  leftText: '[For people 6+ with moderate to severe plaque psoriasis.]',
  rightText: 'For US Residents'
};

describe('<Logo />', () => {
  const component = <Logo {...props} />;
  test('Render the component', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('logo')).toBeTruthy();
  });
});