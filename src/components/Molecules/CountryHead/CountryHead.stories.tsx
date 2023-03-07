import type { Meta, StoryObj } from "@storybook/react";
import CountryHead from "./CountryHead";

const meta: Meta<typeof CountryHead> = {
  title: "Molecules/CountryHead",
  component: CountryHead,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CountryHead>;

export const Primary: Story = {
  args: {
    continent: "Continent",
  },
};
