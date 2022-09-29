import React from 'react';
import { render } from '@testing-library/react';
import Dropdown, { DropdownProps } from '../src/component/Dropdown';

const props: DropdownProps = {
  title: 'Prescribing & Patient Information',
  items: [
    {
      label: 'FDA Prescribing Information',
      path: 'https://www.novartis.us/sites/www.novartis.us/files/cosentyx.pdf',
    },
  ],
};

describe('<Dropdown />', () => {
  const component = <Dropdown {...props} />;
  test('Render the component', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('dropdown')).toBeTruthy();
  });
});