import type { Meta, StoryObj } from "@storybook/react";
import AboutUsBanner from "@/components/aboutUs/aboutUsBanner";
import HamburgerIcon from "@/components/menu/hamburgerIcon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Menu/HamburgerIcon",
  component: HamburgerIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof HamburgerIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    open: false,
    setOpen: () => {},
  },
};
