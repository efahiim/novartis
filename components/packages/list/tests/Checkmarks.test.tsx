import React from 'react';
import { render } from '@testing-library/react';
import Checkmarks, { CheckmarksProps } from '../src/component/Checkmarks';

const props: CheckmarksProps = {
  list: ['Checkmark 1', 'Checkmark 2', 'Checkmark 3']
};

describe('<Checkmarks />', () => {
  const component = (<Checkmarks {...props} />);
  test('Render the component', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('checkmarks')).toBeTruthy();
  });
});
