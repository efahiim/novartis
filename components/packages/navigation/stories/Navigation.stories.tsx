import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link, Navigation } from '@components/navigation';

export default {
  title: 'Navigation',
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation {...args} />;

export const MultipleLinks = Template.bind({});
MultipleLinks.args = {
  links: [
    <Link
      label='Get The Fact'
      path='https://www.google.com'
      selected={false}
      target='_self'
      key={1}
    />,
    <Link
      label='Real Relief'
      path='https://www.google.com'
      selected={false}
      target='_self'
      key={2}
    />,
    <Link
      label='COSENTYX Experience'
      path='https://www.google.com'
      selected={true}
      target='_self'
      key={3}
    />,
    <Link
      label='Appointment Prep'
      path='https://www.google.com'
      selected={false}
      target='_self'
      key={4}
    />,
    <Link
      label='Savings Options'
      path='https://www.google.com'
      selected={false}
      target='_self'
      key={5}
    />,
    <Link
      label='Personal Support'
      path='https://www.google.com'
      selected={false}
      target='_self'
      key={6}
    />,
  ],
};
