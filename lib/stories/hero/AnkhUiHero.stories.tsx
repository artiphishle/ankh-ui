import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiHero } from '@/uis/hero/AnkhUiHero';

const meta: Meta<typeof AnkhUiHero> = {
  title: 'AnkhUi/Hero',
  component: AnkhUiHero,
};
export default meta;

type Story = StoryObj<typeof AnkhUiHero>;

export const Hero: Story = {
  args: {
    _ui: { id: 8518 },
    heading: { title: "Hero Title" },
    button: { label: "Action" }
  }
};