import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { Rubik } from "next/font/google";
import { Inter } from "next/font/google";
import React from "react";

const rubik = Rubik({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

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
      <main className={inter.className + " " + rubik.className + "w-full"}>
        <Story />
      </main>
    ),
  ],
};

export default preview;
