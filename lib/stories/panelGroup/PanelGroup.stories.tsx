import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiPanelGroup } from '@/uis/panelGroup/AnkhUiPanelGroup';

const meta: Meta<typeof AnkhUiPanelGroup> = {
  title: 'AnkhUi/PanelGroup',
  component: AnkhUiPanelGroup,
};
export default meta;

type Story = StoryObj<typeof AnkhUiPanelGroup>;

export const TodoPanelGroup: Story = {
  args: {
  },
};
