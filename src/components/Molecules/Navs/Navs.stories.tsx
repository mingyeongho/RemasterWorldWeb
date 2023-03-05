import type { Meta, StoryObj } from "@storybook/react";

import Navs from "./Navs";

const meta: Meta<typeof Navs> = {
  title: "Molecules/Navs",
  component: Navs,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Navs>;

export const Primary: Story = {};
