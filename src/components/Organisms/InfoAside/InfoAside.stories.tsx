import type { Meta, StoryObj } from "@storybook/react";
import InfoAside from "./InfoAside";

const meta: Meta<typeof InfoAside> = {
  title: "Organisms/InfoAside",
  component: InfoAside,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InfoAside>;

export const Korea: Story = {
  args: {},
};
