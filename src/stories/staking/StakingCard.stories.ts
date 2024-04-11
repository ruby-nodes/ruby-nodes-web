import type { Meta, StoryObj } from "@storybook/react";
import StakingCard from "@/components/staking/StakingCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Staking/StakingCard",
  component: StakingCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof StakingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    project: {
      img: {
        src: require("@/assets/algorand.svg"),
        alt: "Algorand",
      },
      href: "https://www.algorand.com",
    },
    description:
      "Polkadot is a heterogeneous multi-chain interchange and translation architecture which enables customised side-chains to connect with public blockchains.",
    button: {
      label: "Learn more",
      href: "https://polkadot.network",
    },
  },
};
