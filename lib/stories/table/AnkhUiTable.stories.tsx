import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiTable } from '@/uis/table/AnkhUiTable';

const meta: Meta<typeof AnkhUiTable> = {
  title: 'AnkhUi/Table',
  component: AnkhUiTable,
};
export default meta;

type Story = StoryObj<typeof AnkhUiTable>;

export const FontTable: Story = {
  args: {
    endpoint: {
      method: "GET",
      url: 'https://webfonts.googleapis.com/v1/webfonts?capability=WOFF2&key=AIzaSyDbhn2zATglH-mwe_LhHcHFsk_fDhQFHc8'
    },
  },
};