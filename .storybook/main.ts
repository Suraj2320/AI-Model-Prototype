import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../client/src/**/*.mdx",
    "../client/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "client/src/**/*.mdx",
    "client/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    // autodocs: "tag",
  },
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");
    const path = await import("path");

    return mergeConfig(config, {
      root: process.cwd(), // Reset root to project root
      resolve: {
        alias: {
          "@": path.resolve(process.cwd(), "client/src"),
        },
      },
    });
  },
};
export default config;
