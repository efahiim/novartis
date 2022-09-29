import React from 'react';
import { render } from '@testing-library/react';
import PillButton, { PillButtonProps } from '../src/component/PillButton';

const props: PillButtonProps = {
  color: 'purple',
  fullSize: true,
  label: 'Return to start',
};

describe('<PillButton />', () => {
  const component = (<PillButton {...props} />);
  test('Render the component', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('pill-button')).toBeTruthy();
  });
});
