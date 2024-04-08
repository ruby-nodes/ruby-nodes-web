import Hero from "@/components/hero/hero";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Hero/Hero",
  component: Hero,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: "Boundless Networks, Flawless Rubies",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis et nulla et imperdiet. Sed vitae tincidunt elit, pulvinar laoreet ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra,",
    cta: {
      title: "Get Started",
      href: "#",
    },
  },
};
