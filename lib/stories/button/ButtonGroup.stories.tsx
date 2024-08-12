import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiButtonGroup } from '@/uis/button/AnkhUiButtonGroup';
import { AnkhUiButton } from '@/uis';

const meta: Meta<typeof AnkhUiButtonGroup> = {
  title: 'AnkhUi/Button',
  component: AnkhUiButtonGroup,
};

export default meta;
type Story = StoryObj<typeof AnkhUiButtonGroup>;

export const ButtonGroup: Story = {
  args: {
    children: <>
      <AnkhUiButton label='' icon='align-horizontal-justify-start' />
      <AnkhUiButton label='' icon='align-horizontal-justify-center' />
      <AnkhUiButton label='' icon='align-horizontal-justify-end' />
    </>
  }
};