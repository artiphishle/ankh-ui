import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { AnkhUiButton } from '@/uis/button/AnkhUiButton';
import { EAnkhUiVariant } from 'ankh-types';

const meta = {
  title: 'Example/Button',
  component: AnkhUiButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: { backgroundColor: { control: 'color' } },
  args: { onClick: fn() },
} satisfies Meta<typeof AnkhUiButton>;
export default meta;

export const Primary: Story = { args: { label: 'Primary', variant: EAnkhUiVariant.Primary } };
export const Secondary: Story = { args: { label: 'Secondary', variant: EAnkhUiVariant.Secondary } };
export const Default: Story = { args: { label: 'Default', variant: EAnkhUiVariant.Default } };
export const Info: Story = { args: { label: 'Info', variant: EAnkhUiVariant.Info } };
export const Success: Story = { args: { label: 'Success', variant: EAnkhUiVariant.Success } };
export const Warning: Story = { args: { label: 'Warning', variant: EAnkhUiVariant.Warning } };
export const Error: Story = { args: { label: 'Error', variant: EAnkhUiVariant.Error } };

type Story = StoryObj<typeof meta>;