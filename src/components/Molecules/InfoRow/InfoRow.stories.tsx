import type { Meta, StoryObj } from "@storybook/react";
import InfoRow from "./InfoRow";

const meta: Meta<typeof InfoRow> = {
  title: "Molecules/InfoRow",
  component: InfoRow,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InfoRow>;

export const Primary: Story = {
  args: {},
};
