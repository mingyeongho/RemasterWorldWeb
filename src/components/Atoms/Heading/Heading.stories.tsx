import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./Heading";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Heading> = {
  title: "Atoms/Heading",
  component: Heading,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Heading>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const H1: Story = {
  args: {
    heading: 1,
    label: "Heading1",
  },
};

export const H2: Story = {
  args: {
    heading: 2,
    label: "Heading2",
  },
};

export const H3: Story = {
  args: {
    heading: 3,
    label: "Heading3",
  },
};

export const H4: Story = {
  args: {
    heading: 4,
    label: "Heading4",
  },
};

export const H5: Story = {
  args: {
    heading: 5,
    label: "Heading5",
  },
};

export const H6: Story = {
  args: {
    heading: 6,
    label: "Heading6",
  },
};
