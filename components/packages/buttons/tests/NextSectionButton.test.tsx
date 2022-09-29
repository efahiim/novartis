import React from 'react';
import { render } from '@testing-library/react';
import NextSectionButton, { NextSectionButtonProps } from '../src/component/NextSectionButton';

const props: NextSectionButtonProps = {
  sectionId: 'sectionId'
};

describe('<NextSection />', () => {
  const component = (<NextSectionButton {...props} />);
  test('Render the component', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('next-section')).toBeTruthy();
  });
});