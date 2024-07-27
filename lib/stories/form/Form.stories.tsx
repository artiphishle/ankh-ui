import type {Meta, StoryObj} from '@storybook/react';
import {AnkhUiForm} from '@/uis/form/AnkhUiForm';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof AnkhUiForm> = {
  component: AnkhUiForm,
};

export default meta;
type Story = StoryObj<typeof AnkhUiForm>;

export const DynamicForm: Story = {
  args: {},
};
