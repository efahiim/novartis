import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainCarousel, Carousel } from '@components/carousel';
import '@splidejs/react-splide/css';

// export default {
//   title: 'Carousel',
//   component: MainCarousel,
// } as ComponentMeta<typeof MainCarousel>;

// const Template: ComponentStory<typeof MainCarousel> = (args) => <MainCarousel {...args} />;

// export const MultipleCarousel = Template.bind({});
// MultipleCarousel.args = {
//   carousels: [
//     <Carousel length={5} direction='rtl' isMain={false} key={1}/>,
//     <Carousel length={1} isMain={true} key={2}/>,
//     <Carousel length={5} direction='ltr' isMain={false} key={3}/>,
//   ]
// };