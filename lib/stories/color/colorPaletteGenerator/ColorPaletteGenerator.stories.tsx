import type { Meta, StoryObj } from '@storybook/react';
import { AnkhUiColorPaletteGenerator } from '@/uis/color/colorPaletteGenerator/AnkhUiColorPaletteGenerator';
import { EAnkhColorTone } from "ankh-types";

const meta: Meta<typeof AnkhUiColorPaletteGenerator> = {
  title: 'AnkhUi/Color/PaletteGenerator',
  component: AnkhUiColorPaletteGenerator,
};
export default meta;

type Story = StoryObj<typeof AnkhUiColorPaletteGenerator>;

export const EarthTones: Story = {
  args: { tone: EAnkhColorTone.Earth },
};
export const FluorescentTones: Story = {
  args: { tone: EAnkhColorTone.Pastel },
};
export const JewelTones: Story = {
  args: { tone: EAnkhColorTone.Fluorescent },
};
export const NeutralTones: Story = {
  args: { tone: EAnkhColorTone.Neutral },
};
export const ShadeTones: Story = {
  args: { tone: EAnkhColorTone.Shades },
};