import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiGrid } from '@/uis/grid/AnkhUiGrid';

const meta: Meta<typeof AnkhUiGrid> = {
  title: 'AnkhUi/Grid',
  component: AnkhUiGrid,
};
export default meta;

type Story = StoryObj<typeof AnkhUiGrid>;

export const SwappableGrid: Story = {
  args: {
    children: [
      <div key="1">1</div>,
      <div key="2">2</div>,
      <div key="3">3</div>,
      <div key="4">4</div>,
      <div key="5">5</div>,
      <div key="6">6</div>,
    ],
  },
};
