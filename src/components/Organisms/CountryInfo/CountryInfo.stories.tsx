import { DummyCountryInfo } from "../../../utils/dummyData";
import type { Meta, StoryObj } from "@storybook/react";
import CountryInfo from "./CountryInfo";

const meta: Meta<typeof CountryInfo> = {
  title: "Organisms/CountryInfo",
  component: CountryInfo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CountryInfo>;

export const Korea: Story = {
  args: {
    country: DummyCountryInfo,
  },
};
