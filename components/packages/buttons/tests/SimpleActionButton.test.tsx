import React from 'react';
import { render } from '@testing-library/react';
import SimpleActionButton, { SimpleActionButtonProps } from '../src/component/SimpleActionButton';

const props: SimpleActionButtonProps = {
  color: 'pink',
  label: 'Yes',
};

describe('<SimpleActionButton />', () => {
  const component = (<SimpleActionButton {...props} />);
  test('Render the component', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('simple-action-button')).toBeTruthy();
  });
});
