import React from 'react';
import { render } from '@testing-library/react';
import Modal, { ModalProps } from '../src/component/Modal';

const props: ModalProps = {
  showModal: true,
  setShowModal: (): void => {
    false;
  },
};

describe('<Modal />', () => {
  const component = <Modal {...props} />;
  test('Render the component', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('modal')).toBeTruthy();
  });
});
