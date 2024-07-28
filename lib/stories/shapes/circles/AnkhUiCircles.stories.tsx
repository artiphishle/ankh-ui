import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiCircles } from '@/uis/shapes/circles/AnkhUiCircles';
import { EAnkhUiSize, EAnkhColorUnit } from 'ankh-types';
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
    circles: purple.ls.map((l) => ({
      color: purple.getValue(l),
      size: EAnkhUiSize.Sm,
    })),
  },
};

export const greenCirclesXs: Story = {
  args: {
    title: green.title,
    circles: green.ls.map((l) => ({
      color: green.getValue(l),
      size: EAnkhUiSize.Sm,
    })),
  },
};
