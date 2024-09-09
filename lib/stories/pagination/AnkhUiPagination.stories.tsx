import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiPagination } from '@/uis/pagination/AnkhUiPagination';

const meta: Meta<typeof AnkhUiPagination> = {
  title: 'AnkhUi/Pagination',
  component: AnkhUiPagination,
};
export default meta;

type Story = StoryObj<typeof AnkhUiPagination>;

export const NavTextOnly: Story = {
  args: {
    _ui: { id: 'sb-nav-01' }
  },
};