import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiCircle } from '@/uis/shapes/circle/AnkhUiCircle';
import { EAnkhUiSize } from 'ankh-types';

const meta: Meta<typeof AnkhUiCircle> = {
  title: 'AnkhUi/Shapes/Circle',
  component: AnkhUiCircle,
};
export default meta;

type Story = StoryObj<typeof AnkhUiCircle>;

export const PurpleCircleXs: Story = {
  args: {
    style: { backgroundColor: 'hsl(300, 100%, 25%)' },
    size: EAnkhUiSize.Xs,
  },
};

export const PurpleCircleSm: Story = {
  args: {
    style: { backgroundColor: 'hsl(300, 100%, 25%)' },
    size: EAnkhUiSize.Sm,
  },
};

export const PurpleCircleMd: Story = {
  args: {
    style: { backgroundColor: 'hsl(300, 100%, 25%)' },
    size: EAnkhUiSize.Md,
  },
};

export const PurpleCircleLg: Story = {
  args: {
    style: { backgroundColor: 'hsl(300, 100%, 25%)' },
    size: EAnkhUiSize.Lg,
  },
};

export const PurpleCircleXl: Story = {
  args: {
    style: { backgroundColor: 'hsl(300, 100%, 25%)' },
    size: EAnkhUiSize.Xl,
  },
};
