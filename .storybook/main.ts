import type {StorybookConfig} from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../lib/stories/**/stories/**/*.mdx',
    '../lib/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    // '../lib/uis/**/stories/**/*.mdx',
    // '../lib/uis/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
};
export default config;
