import type { Preview } from "@storybook/react";
import "../client/src/index.css"; // Import global styles including Tailwind

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
        default: 'light',
        values: [
          {
            name: 'light',
            value: '#ffffff',
          },
          {
            name: 'dark',
            value: '#0f172a', // slate-900
          },
        ],
      },
  },
};

export default preview;
