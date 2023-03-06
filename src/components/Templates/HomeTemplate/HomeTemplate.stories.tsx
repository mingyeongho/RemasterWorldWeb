import type { Meta, StoryObj } from "@storybook/react";

import HomeTemplate from "./HomeTemplate";

const meta: Meta<typeof HomeTemplate> = {
  title: "Templates/HomeTemplate",
  component: HomeTemplate,
};

export default meta;
type Story = StoryObj<typeof HomeTemplate>;

export const Home: Story = {};
