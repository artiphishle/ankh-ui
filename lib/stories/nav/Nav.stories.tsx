import type {Meta, StoryObj} from '@storybook/react';
import {AnkhUiNav} from '@/uis/nav/AnkhUiNav';

const meta: Meta<typeof AnkhUiNav> = {
  component: AnkhUiNav,
};
export default meta;

type Story = StoryObj<typeof AnkhUiNav>;

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
