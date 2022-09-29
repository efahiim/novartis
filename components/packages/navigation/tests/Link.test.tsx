import React from 'react';
import { render } from '@testing-library/react';
import Link, { LinkProps } from '../src/component/Link';

const props: LinkProps = {
  label: 'get facts',
  path: 'hhtps://www.google.com',
  target: '_blank',
  selected: false
};

describe('<Link />', () => {
  const component = <Link {...props} />;
  test('Render the component', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('link')).toBeTruthy();
  });
});
