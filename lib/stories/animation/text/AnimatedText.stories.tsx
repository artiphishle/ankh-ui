import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiAnimatedText } from '@/uis/animation/text/AnkhUiAnimatedText';

const meta: Meta<typeof AnkhUiAnimatedText> = {
  title: 'AnkhUi/Animation',
  component: AnkhUiAnimatedText,
};

export default meta;
type Story = StoryObj<typeof AnkhUiAnimatedText>;

export const RotatingText: Story = {
  args: {
    text: "Ankhorage"
  },
};
