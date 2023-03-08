import type { Meta, StoryObj } from "@storybook/react";

import FloatingBox from "./FloatingBox";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof FloatingBox> = {
  title: "Atoms/FloatingBox",
  component: FloatingBox,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof FloatingBox>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {},
};
