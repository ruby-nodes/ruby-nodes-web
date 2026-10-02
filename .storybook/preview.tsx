import type { Preview } from "@storybook/nextjs-vite";
import "@fontsource-variable/rubik";
import "../src/app/globals.css";
import React from "react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#1a202c",
        },
        {
          name: "light",
          value: "#f7fafc",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <main className="w-full font-rubik">
        <Story />
      </main>
    ),
  ],
};

export default preview;
