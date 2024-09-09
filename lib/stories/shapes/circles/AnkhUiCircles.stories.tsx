import type { Meta, StoryObj } from '@storybook/react';
import { EAnkhUiSize } from 'ankh-types';
import { AnkhUiCircles } from '@/uis/shapes/circles/AnkhUiCircles';
import '@/uis/shapes/circles/circles.css';

const meta: Meta<typeof AnkhUiCircles> = {
  title: 'AnkhUi/Shapes/Circles',
  component: AnkhUiCircles,
};
export default meta;

type Story = StoryObj<typeof AnkhUiCircles>;

const purple = {
  getValue: (l: number) => `hsl(300,100%,${l}%`,
  getParsedValue: (l: number) => [300, 100, l],
  ls: [25, 40, 55, 70],
  title: 'Purple Tones',
};

const green = {
  getValue: (l: number) => `hsl(500,100%,${l}%`,
  ls: [25, 40, 55, 70],
  title: 'Green Tones',
};

export const PurpleCirclesXs: Story = {
  args: {
    title: purple.title,
    circles: purple.ls.map((l, index) => ({
      _ui: { id: `circle-${index}` },
      style: { backgroundColor: purple.getValue(l) },
      size: EAnkhUiSize.Sm,
    })),
  },
};

export const greenCirclesXs: Story = {
  args: {
    title: green.title,
    circles: green.ls.map((l, index) => ({
      _ui: { id: `circle2-${index}` },
      style: { backgroundColor: green.getValue(l) },
      size: EAnkhUiSize.Sm,
    })),
  },
};
