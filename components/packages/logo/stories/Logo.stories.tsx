import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from '@components/logo';
import LogoData from '../../header/content/Header.content.json';

const texts = LogoData.data.headerCollection.items[0].body.json.content[0].content[0].value.split(',');
const leftText = texts[0];
const rightText = texts[1];

export default {
  title: 'Header',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const LogoInformation = Template.bind({});
LogoInformation.args = {
  imageSrc: '/assets/images/logo.png',
  imageAlt: 'Cosentyx',
  imageLink: '/',
  leftText: leftText,
  rightText: rightText
};