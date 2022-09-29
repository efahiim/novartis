import React from 'react';
import { render } from '@testing-library/react';
import MainCarousel, { MainCarouselProps } from '../src/component/MainCarousel';
import { Carousel } from '@components/carousel';

// const props: MainCarouselProps = {
//   carousels: [
//     <Carousel length={5} direction='rtl' isMain={false} key={1}/>,
//     <Carousel length={1} isMain={true} key={2}/>,
//     <Carousel length={5} direction='ltr' isMain={false} key={3}/>,
//   ]
// };

// describe('<MainCarousel />', () => {
//   const component = (<MainCarousel {...props}/>);
//   test('Render the component', () => {
//     const { queryByTestId } = render(component);
//     expect(queryByTestId('main-carousel')).toBeTruthy();
//   });
// });
