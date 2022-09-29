import React from 'react';
import { render } from '@testing-library/react';
import Picture, { PictureProps } from '../src/component/Picture';

const props: PictureProps = {
  children: [<img src="" key={1}/>]
};

describe('<Picture />', () => {
  const component = (<Picture {...props} />);
  test('Render the component', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('picture')).toBeTruthy();
  });
});
