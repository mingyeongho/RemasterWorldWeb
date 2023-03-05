import type { Meta, StoryObj } from "@storybook/react";

import HomeTemplate from "./HomeTemplate";

const meta: Meta<typeof HomeTemplate> = {
  title: "Templates/HomeTemplate",
  component: HomeTemplate,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof HomeTemplate>;

export const Home: Story = {};
