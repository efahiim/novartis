import React from 'react';
import { render } from '@testing-library/react';
import SocialMediaIcon, { SocialMediaIconProps } from '../src/component/SocialMediaIcon';

const props: SocialMediaIconProps = {
  href: '#',
  type: 'facebook',
};

describe('<SocialMediaIcon />', () => {
  const component = (<SocialMediaIcon {...props} />);
  test('Render the component', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('social-media-icon')).toBeTruthy();
  });
});
