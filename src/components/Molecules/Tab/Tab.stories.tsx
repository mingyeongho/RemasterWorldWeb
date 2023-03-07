import type { Meta, StoryObj } from "@storybook/react";
import Tab from "./Tab";

const meta: Meta<typeof Tab> = {
  title: "Molecules/Tab",
  component: Tab,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Primary: Story = {
  args: {},
};
