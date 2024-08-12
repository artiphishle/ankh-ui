import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiDialog } from '@/uis/dialog/AnkhUiDialog';

const meta: Meta<typeof AnkhUiDialog> = {
  title: 'AnkhUi/Dialog',
  component: AnkhUiDialog,
};
export default meta;

type Story = StoryObj<typeof AnkhUiDialog>;

export const ModalDialog: Story = {
  args: {}
};
