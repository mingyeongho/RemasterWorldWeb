import type { Meta, StoryObj } from "@storybook/react";
import InfoContent from "./InfoContent";

const meta: Meta<typeof InfoContent> = {
  title: "Organisms/InfoContent",
  component: InfoContent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InfoContent>;

export const Korea: Story = {
  args: {},
};
