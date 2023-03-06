import type { Meta, StoryObj } from "@storybook/react";
import CountriesTab from "./CountriesTab";

const meta: Meta<typeof CountriesTab> = {
  title: "Organisms/CountriesTab",
  component: CountriesTab,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CountriesTab>;

export const Primary: Story = {
  args: {},
};
