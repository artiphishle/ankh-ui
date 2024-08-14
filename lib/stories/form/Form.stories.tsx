import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiForm, EAnkhUiFormInputType } from '@/uis/form/AnkhUiForm';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof AnkhUiForm> = {
  title: 'AnkhUi/Form',
  component: AnkhUiForm,
};

export default meta;
type Story = StoryObj<typeof AnkhUiForm>;

export const DynamicForm: Story = {
  args: {
    items: [
      {
        type: EAnkhUiFormInputType.Select,
        value: "male",
        placeholder: "Gender",
        title: "Gender",
        options: [
          { name: 'female', value: 'female' },
          { name: 'male', value: 'male' },
        ]
      },
      {
        type: EAnkhUiFormInputType.Text,
        value: "Beyond",
        placeholder: "Firstname",
        title: "Firstname"
      },
      {
        type: EAnkhUiFormInputType.Text,
        value: "Creative",
        placeholder: "Lastname",
        title: "Lastname"
      },
      {
        type: EAnkhUiFormInputType.Range,
        min: 0,
        max: 100,
        value: 80,
        placeholder: "Range",
        title: "Range"
      },
      {
        type: EAnkhUiFormInputType.Textarea,
        value: "Eine längere Beschreibung...",
        placeholder: "Details",
        title: "Details"
      }
    ]
  },
};
