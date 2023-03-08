import type { Meta, StoryObj } from "@storybook/react";
import { ChangeEvent, FormEvent } from "react";
import Form from "./Form";

const meta: Meta<typeof Form> = {
  title: "Molecules/Form",
  component: Form,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Primary: Story = {
  args: {
    value: "",
    onChange: (e: ChangeEvent<HTMLInputElement>) => {},
    onSearch: (e: FormEvent) => {},
  },
};
