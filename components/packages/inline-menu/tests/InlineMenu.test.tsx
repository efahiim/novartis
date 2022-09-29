import React from 'react';
import { render } from '@testing-library/react';
import InlineMenu, { InlineMenuProps } from '../src/component/InlineMenu';
import { Link } from '@components/navigation';

const props: InlineMenuProps = {
  enableTopButton: true,
  navLinks: {
    links: [
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
    ]
  }
};

describe('<InlineMenu />', () => {
  const component = <InlineMenu {...props} />;
  test('Render the component', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('inline-menu')).toBeTruthy();
  });
});
