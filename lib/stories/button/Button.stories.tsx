import type { Meta, StoryObj } from '@storybook/react';
import { EAnkhUiVariant } from 'ankh-types';
import { AnkhUiButton } from '../..//uis/button/AnkhUiButton';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof AnkhUiButton> = {
  title: 'AnkhUi/Button',
  component: AnkhUiButton,
};

export default meta;
type Story = StoryObj<typeof AnkhUiButton>;

export const SuccessButton: Story = {
  args: {
    label: 'Success',
    variant: EAnkhUiVariant.Success,
    backgroundColor: '#ccffcc',
  },
};

export const WarningButton: Story = {
  args: {
    variant: EAnkhUiVariant.Warning,
    label: 'Warning',
    backgroundColor: '#ccffcc',
  },
};

export const ErrorButton: Story = {
  args: {
    variant: EAnkhUiVariant.Error,
    label: 'Error',
    backgroundColor: '#ff0000',
  },
};

export const InfoButton: Story = {
  args: {
    label: 'Info',
    variant: EAnkhUiVariant.Info,
    backgroundColor: '#ababad',
  },
};

export const DefaultButton: Story = {
  args: {
    label: 'Default',
    variant: EAnkhUiVariant.Default,
    backgroundColor: '#fff',
  },
};
