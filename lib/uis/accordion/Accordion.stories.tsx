import type { Meta, StoryObj } from '@storybook/react';
import {Accordion } from './Accordion';
import { Heading } from '../Heading';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Accordion> = {
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const GoodSummary: Story = {
  args: {
    items: [
      {
        summary: <Heading level="h3" text="Preprocessor"></Heading>,
        details: <p>Here some good text because it's a good accordion.</p>
      },
      {
        summary: <Heading level="h3" text="Utility First"></Heading>,
        details: <p>Here some good text because it's a good accordion.</p>
      }
    ]
  },
};