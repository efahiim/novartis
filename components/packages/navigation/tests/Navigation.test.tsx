import React from 'react';
import { render } from '@testing-library/react';
import Navigation, { NavigationProps } from '../src/component/Navigation';
import Link from '../src/component/Link';

const props: NavigationProps = {
  links: [
    <Link
      label='Get the fact'
      path='https://www.google.com'
      selected={true}
      target='_self'
      key={1}
    />,
    <Link
      label='Get the fact'
      path='https://www.google.com'
      selected={false}
      target='_self'
      key={2}
    />,
    <Link
      label='Get the fact'
      path='https://www.google.com'
      selected={false}
      target='_self'
      key={3}
    />,
    <Link
      label='Get the fact'
      path='https://www.google.com'
      selected={false}
      target='_self'
      key={4}
    />,
    <Link
      label='Get the fact'
      path='https://www.google.com'
      selected={false}
      target='_self'
      key={5}
    />,
    <Link
      label='Get the fact'
      path='https://www.google.com'
      selected={false}
      target='_self'
      key={6}
    />,
  ],
};

describe('<Navigation />', () => {
  const component = <Navigation {...props} />;
  test('Render the component', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('navigation')).toBeTruthy();
  });
});
