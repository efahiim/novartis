import React from 'react';
import { render } from '@testing-library/react';
import NavigationHelp from '../src/component/NavigationHelp';

describe('<NavigationHelp />', () => {
  const component = <NavigationHelp />;
  test('Render the component', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('navigation-help')).toBeTruthy();
  });
});
