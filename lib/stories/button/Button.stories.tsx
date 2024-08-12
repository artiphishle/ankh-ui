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

export const PrimaryButton: Story = {
  args: {
    label: 'Primary',
    variant: EAnkhUiVariant.Primary,
  },
};

export const SecondaryButton: Story = {
  args: {
    label: 'Secondary',
    variant: EAnkhUiVariant.Secondary,
  },
};

export const SuccessButton: Story = {
  args: {
    label: 'Success',
    variant: EAnkhUiVariant.Success,
  },
};

export const WarningButton: Story = {
  args: {
    variant: EAnkhUiVariant.Warning,
    label: 'Warning',
  },
};

export const ErrorButton: Story = {
  args: {
    variant: EAnkhUiVariant.Error,
    label: 'Error',
  },
};

export const InfoButton: Story = {
  args: {
    label: 'Info',
    variant: EAnkhUiVariant.Info,
  },
};

export const DefaultButton: Story = {
  args: {
    label: 'Default',
    variant: EAnkhUiVariant.Default,
  },
};
