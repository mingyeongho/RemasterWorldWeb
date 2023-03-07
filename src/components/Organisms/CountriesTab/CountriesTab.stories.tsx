import { DummyCountries } from "../../../utils/dummyData";
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

export const ALL: Story = {
  args: {
    countries: DummyCountries,
    qs: undefined,
  },
};

export const Asia: Story = {
  args: {
    countries: DummyCountries,
    qs: "AS",
  },
};

export const Europe: Story = {
  args: {
    countries: DummyCountries,
    qs: "EU",
  },
};

export const Africa: Story = {
  args: {
    countries: DummyCountries,
    qs: "AF",
  },
};

export const NorthAmerica: Story = {
  args: {
    countries: DummyCountries,
    qs: "NA",
  },
};

export const SouthAmerica: Story = {
  args: {
    countries: DummyCountries,
    qs: "SA",
  },
};

export const Antarctica: Story = {
  args: {
    countries: DummyCountries,
    qs: "AN",
  },
};

export const Oceania: Story = {
  args: {
    countries: DummyCountries,
    qs: "OC",
  },
};
