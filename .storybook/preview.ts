import { setup, type Preview } from "@storybook/vue3";
import { jest } from "@storybook/jest";
import { createTestingPinia } from "@pinia/testing";

setup((app) => app.use(createTestingPinia({ createSpy: jest.fn })));

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
