import React from 'react';
import { render } from '@testing-library/react';
import MiscButton, { MiscButtonProps } from '../src/component/MiscButton';

const props: MiscButtonProps = {
  color: 'purple',
  direction: 'left',
  label: 'The Systemic Difference',
};

describe('<MiscButton />', () => {
  const component = (<MiscButton {...props} />);
  test('Render the component', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('misc-button')).toBeTruthy();
  });
});
