import type {Meta, StoryObj} from '@storybook/react';
import {Button, type AnkhUiButton} from './Button';
import {EVariant} from '../../types';

//👇 This default export determines where your story goes in the story list
const meta: Meta<AnkhUiButton> = {
  component: Button,
};

export default meta;
type Story = StoryObj<AnkhUiButton>;

export const SuccessButton: Story = {
  args: {
    label: 'Success',
    variant: EVariant.Success,
    backgroundColor: '#ccffcc',
  },
};

export const WarningButton: Story = {
  args: {
    variant: EVariant.Warning,
    label: 'Warning',
    backgroundColor: '#ccffcc',
  },
};

export const ErrorButton: Story = {
  args: {
    variant: EVariant.Error,
    label: 'Error',
    backgroundColor: '#ff0000',
  },
};

export const InfoButton: Story = {
  args: {
    label: 'Info',
    variant: EVariant.Info,
    backgroundColor: '#ababad',
  },
};

export const DefaultButton: Story = {
  args: {
    label: 'Default',
    variant: EVariant.Default,
    backgroundColor: '#fff',
  },
};
