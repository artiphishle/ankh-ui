import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiWysiwyg } from '@/uis/wysiwyg/AnkhUiWysiwyg';

const meta: Meta<typeof AnkhUiWysiwyg> = {
  title: 'AnkhUi/Wysiwyg',
  component: AnkhUiWysiwyg,
};
export default meta;

type Story = StoryObj<typeof AnkhUiWysiwyg>;

export const DefaultEditor: Story = {
  args: {},
};