import type { Meta, StoryObj } from '@storybook/react';
import {Form} from './Form';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Form> = {
  component: Form,
};

export default meta;
type Story = StoryObj<typeof Form>;

export const DynamicForm: Story = {
  args: {},
};