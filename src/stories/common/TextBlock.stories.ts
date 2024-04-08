import type { Meta, StoryObj } from "@storybook/react";
import TextBlock from "@/components/common/TextBlock";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Common/TextBlock",
  component: TextBlock,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof TextBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: "About Us",
    description:
      "We are a team of passionate developers building the next generation of web applications. We are a team of passionate developers building the next generation of web applications. We are a team of passionate developers building the next generation of web applications. We are a team of passionate developers building the next generation of web applications.",
    cta: {
      label: "Learn More",
      href: "https://example.com",
    },
  },
};
