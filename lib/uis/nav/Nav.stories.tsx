import type {Meta, StoryObj} from '@storybook/react';
import {Nav} from './Nav';

const meta: Meta<typeof Nav> = {
  component: Nav,
};
export default meta;

type Story = StoryObj<typeof Nav>;

export const NavTextOnly: Story = {
  args: {
    items: [{name: 'home'}, {name: 'company'}],
  },
};

export const NavWithIcons: Story = {
  args: {
    items: [
      {name: 'home', icon: 'House'},
      {name: 'company', icon: 'Fabric'},
    ],
  },
};
