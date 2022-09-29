import React from 'react';
import { render } from '@testing-library/react';
import BackToTopButton, { BackToTopButtonProps } from '../src/component/BackToTopButton';

const props: BackToTopButtonProps = {
  color: 'purple'
};

describe('<ButtonBackToTop />', () => {
  const component = (<BackToTopButton {...props} />);
  test('Render the component', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('button-totop')).toBeTruthy();
  });
});