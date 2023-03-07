import type { Meta, StoryObj } from "@storybook/react";

import A from "./A";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof A> = {
  title: "Atoms/A",
  component: A,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof A>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    href: "/",
    label: "Link",
  },
};
