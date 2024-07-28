import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiBarChart } from '@/uis/charts/bar/AnkhUiBarChart';

const meta: Meta<typeof AnkhUiBarChart> = {
  title: "AnkhUi/Charts/BarChart",
  component: AnkhUiBarChart,
};
export default meta;

type Story = StoryObj<typeof AnkhUiBarChart>;

export const TodoBarChart: Story = {
  args: {
  },
};