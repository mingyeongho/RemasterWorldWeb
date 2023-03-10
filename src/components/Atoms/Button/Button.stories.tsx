import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Button",
    onClick: (e: React.MouseEvent) => {},
  },
};

export const Inherit: Story = {
  args: {
    label: "Inherit",
    onClick: (e: React.MouseEvent) => {},

    backgroundColor: "inherit",
  },
};
