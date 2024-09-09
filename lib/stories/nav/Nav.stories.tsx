import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiNav } from '@/uis/nav/AnkhUiNav';

const meta: Meta<typeof AnkhUiNav> = {
  title: 'AnkhUi/Nav',
  component: AnkhUiNav,
};
export default meta;

type Story = StoryObj<typeof AnkhUiNav>;

export const NavTextOnly: Story = {
  args: {
    _ui: { id: 'sb-nav-with-icons-01' },
    items: [
      { name: 'home' }, { name: 'company' }
    ],
  },
};

export const NavWithIcons: Story = {
  args: {
    _ui: { id: 'sb-nav-with-icons-02' },
    items: [
      { name: 'home', icon: 'House' },
      { name: 'company', icon: 'building-2' },
    ],
  },
};
