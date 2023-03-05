import type { Meta, StoryObj } from "@storybook/react";

import Form from "./Form";

const meta: Meta<typeof Form> = {
  title: "Molecules/Form",
  component: Form,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Primary: Story = {};
