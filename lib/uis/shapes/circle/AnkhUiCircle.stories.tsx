import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiCircle } from './AnkhUiCircle';
import { EAnkhUiSize, EAnkhColorUnit } from 'ankh-types';

const meta: Meta<typeof AnkhUiCircle> = {
  component: AnkhUiCircle,
};
export default meta;

type Story = StoryObj<typeof AnkhUiCircle>;

export const PurpleCircleXs: Story = {
  args: {
    color: {
      parsedValue: [300, 100, 25],
      value: "hsl(300, 100%, 25%)",
      unit: EAnkhColorUnit.Hsl
    },
    size: EAnkhUiSize.Xs
  },
};

export const PurpleCircleSm: Story = {
  args: {
    color: {
      parsedValue: [300, 100, 25],
      value: "hsl(300, 100%, 25%)",
      unit: EAnkhColorUnit.Hsl
    },
    size: EAnkhUiSize.Sm
  },
};

export const PurpleCircleMd: Story = {
  args: {
    color: {
      parsedValue: [300, 100, 25],
      value: "hsl(300, 100%, 25%)",
      unit: EAnkhColorUnit.Hsl
    },
    size: EAnkhUiSize.Md
  },
};

export const PurpleCircleLg: Story = {
  args: {
    color: {
      parsedValue: [300, 100, 25],
      value: "hsl(300, 100%, 25%)",
      unit: EAnkhColorUnit.Hsl
    },
    size: EAnkhUiSize.Lg
  },
};

export const PurpleCircleXl: Story = {
  args: {
    color: {
      parsedValue: [300, 100, 25],
      value: "hsl(300, 100%, 25%)",
      unit: EAnkhColorUnit.Hsl
    },
    size: EAnkhUiSize.Xl
  },
};
