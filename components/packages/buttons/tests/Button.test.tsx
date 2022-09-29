import React from 'react';
import { render } from '@testing-library/react';
import Button, { ButtonProps } from '../src/component/Button';

const props: ButtonProps = {
  label: 'Button',
  size: 'large',
  primary: false,
};

describe('<Button />', () => {
  const component = (<Button {...props} />);
  test('Render the component', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('button')).toBeTruthy();
  });
});
