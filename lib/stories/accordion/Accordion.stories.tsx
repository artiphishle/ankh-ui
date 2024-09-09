import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiAccordion } from '@/uis/accordion/AnkhUiAccordion';
import { AnkhUiHeading } from '@/uis/heading/AnkhUiHeading';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof AnkhUiAccordion> = {
  title: 'AnkhUi/Accordion',
  component: AnkhUiAccordion,
};

export default meta;
type Story = StoryObj<typeof AnkhUiAccordion>;

export const Accordion: Story = {
  args: {
    _ui: { id: 'accordion-1335' },
    items: [
      {
        summary: <AnkhUiHeading _ui={{ id: 'sb-accordion-heading-01' }} level="h3" text="Preprocessor" />,
        details: <p>Here some good text because it's a good accordion.</p>,
      },
      {
        summary: <AnkhUiHeading _ui={{ id: 'sb-accordion-heading-02' }} level="h3" text="Utility First" />,
        details: <p>Here some good text because it's a good accordion.</p>,
      },
    ],
  },
};
