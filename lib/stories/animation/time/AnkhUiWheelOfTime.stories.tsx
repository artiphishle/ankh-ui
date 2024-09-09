import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiWheelOfTime } from '@/uis/animation/time/AnkhUiWheelOfTime';

const meta: Meta<typeof AnkhUiWheelOfTime> = {
  title: 'AnkhUi/Animation',
  component: AnkhUiWheelOfTime,
};
export default meta;

type Story = StoryObj<typeof AnkhUiWheelOfTime>;

export const Vertical: Story = {
  args: {
    years: [
      -2500,
      -1400,
      -1300,
      -810,
      -460,
      -377,
      -353,
      -300,
      -299,
      -292,
      81,
      600,
      622,
      634,
      639,
      709,
      778,
      800,
      810,
      889,
      1000,
      1100,
      1102,
      1113,
      1136,
      1137,
      1163,
      1227,
      1248,
      1279,
      1401,
      1406,
      1466,
      1479,
      1485,
      1500,
      1501,
      1506,
      1552,
      1566,
      1568,
      1579,
      1600,
      1609,
      1626, 1634, 1648, 1656, 1663, 1667, 1671, 1675, 1681, 1692, 1702, 1739, 1752, 1795, 1802, 1824, 1830, 1859, 1869, 1875, 1882, 1887, 1899, 1924, 1925, 1931, 1958, 1959, 1964, 1970, 1975, 1980, 1986, 1987, 1995, 1997, 2003, 2005,],
    duration: 200
  },
};