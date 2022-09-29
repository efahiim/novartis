import React from 'react';
import { render } from '@testing-library/react';
import HintItem, { HintItemProps } from '../src/component/HintItem';

const props: HintItemProps = {
  label: 'This is the text of the component.',
};

describe('<HintItem />', () => {
  const component = (<HintItem {...props} />);
  test('Render the component', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('hint-item')).toBeTruthy();
  });
});
