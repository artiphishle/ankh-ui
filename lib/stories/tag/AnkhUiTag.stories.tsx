import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiTag } from '@/uis/tag/AnkhUiTag';
import { EAnkhUiVariant } from 'ankh-types';

const meta: Meta<typeof AnkhUiTag> = {
  title: 'AnkhUi/Tag',
  component: AnkhUiTag,
};
export default meta;

type Story = StoryObj<typeof AnkhUiTag>;

export const PrimaryTag: Story = {
  args: {
    label: "Primary",
    variant: EAnkhUiVariant.Primary
  },
};

export const SecondaryTag: Story = {
  args: {
    label: "Secondary",
    variant: EAnkhUiVariant.Secondary
  },
};

export const AccentTag: Story = {
  args: {
    label: "Accent",
    variant: EAnkhUiVariant.Accent
  },
};

export const SuccessTag: Story = {
  args: {
    label: "Success",
    variant: EAnkhUiVariant.Success
  },
};

export const WarningTag: Story = {
  args: {
    label: "Warning",
    variant: EAnkhUiVariant.Warning
  },
};

export const ErrorTag: Story = {
  args: {
    label: "Error",
    variant: EAnkhUiVariant.Error
  },
};

export const InfoTag: Story = {
  args: {
    label: "Info",
    variant: EAnkhUiVariant.Info
  },
};

export const DefaultTag: Story = {
  args: {
    label: "Default",
    variant: EAnkhUiVariant.Default
  },
};