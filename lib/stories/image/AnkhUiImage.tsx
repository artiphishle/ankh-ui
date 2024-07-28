import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiImage } from '@/uis/image/AnkhUiImage';

const meta: Meta<typeof AnkhUiImage> = {
  title: 'AnkhUiImage',
  component: AnkhUiImage,
};
export default meta;

type Story = StoryObj<typeof AnkhUiImage>;

export const SwappableList: Story = {
  args: {
    alt: 'Image',
    src: ''
  },
};
