import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiCircle } from '@/uis/shapes/circle/AnkhUiCircle';
import { EAnkhUiSize, EAnkhColorUnit } from 'ankh-types';

const meta: Meta<typeof AnkhUiCircle> = {
  component: AnkhUiCircle,
};
export default meta;

type Story = StoryObj<typeof AnkhUiCircle>;

export const PurpleCircleXs: Story = {
  args: {
    color: 'hsl(300, 100%, 25%)',
    size: EAnkhUiSize.Xs,
  },
};

export const PurpleCircleSm: Story = {
  args: {
    color: 'hsl(300, 100%, 25%)',
    size: EAnkhUiSize.Sm,
  },
};

export const PurpleCircleMd: Story = {
  args: {
    color: 'hsl(300, 100%, 25%)',
    size: EAnkhUiSize.Md,
  },
};

export const PurpleCircleLg: Story = {
  args: {
    color: 'hsl(300, 100%, 25%)',
    size: EAnkhUiSize.Lg,
  },
};

export const PurpleCircleXl: Story = {
  args: {
    color: 'hsl(300, 100%, 25%)',
    size: EAnkhUiSize.Xl,
  },
};
