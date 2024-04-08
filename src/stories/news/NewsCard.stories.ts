import type { Meta, StoryObj } from "@storybook/react";
import StakingCard from "@/components/staking/StakingCard";
import NewsCard from "@/components/news/newsCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "News/NewsCard",
  component: NewsCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof NewsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: "Polkadot - A brief overview",
    description:
      "Polkadot is a heterogeneous multi-chain interchange and translation architecture which enables customised side-chains to connect with public blockchains.",
    date: new Date(),
    href: "https://polkadot.network",
    image:
      "https://t4.ftcdn.net/jpg/05/81/90/71/360_F_581907195_EWTWX9mmu5esZl2ceB6lhBavKprfTXV7.jpg",
  },
};
