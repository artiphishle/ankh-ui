import type {Meta, StoryObj} from '@storybook/react';
import {AnkhUiCard} from '@/uis/card/AnkhUiCard';

const meta: Meta<typeof AnkhUiCard> = {
  component: AnkhUiCard,
};
export default meta;

type Story = StoryObj<typeof AnkhUiCard>;

export const CardWithImage: Story = {
  args: {
    color: {value: 'hsl(180,20%,20%)'},
    image: {
      alt: 'Photo',
      src: 'https://sites.bu.edu/dme/files/2019/11/photographer-698908_1280.jpg',
      width: 200,
      height: 140,
    },
  },
};

export const CardWithText: Story = {
  args: {
    color: {value: 'hsl(200,20%,80%)'},
    text: 'This is a wonderful story of a young card claiming to be the one and only typographical miracle ever seen by the entire world.',
    title: 'Text Card',
  },
};

export const CardWithImageAndText: Story = {
  args: {
    color: {value: 'hsl(80,20%,80%)'},
    image: {
      alt: 'Photo',
      src: 'https://sites.bu.edu/dme/files/2019/11/photographer-698908_1280.jpg',
      width: 200,
      height: 140,
    },
    text: 'This is a wonderful story of a young card claiming to be put on top of a beautiful photo.',
    title: 'Photo & Text',
  },
};
