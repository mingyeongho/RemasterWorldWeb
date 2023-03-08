import { setContinentDummyCountry } from "../../../utils/dummyData";
import type { Meta, StoryObj } from "@storybook/react";
import Country from "./Country";

const meta: Meta<typeof Country> = {
  title: "Organisms/Country",
  component: Country,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Country>;

export const Asia: Story = {
  args: {
    country: setContinentDummyCountry("AS"),
  },
};

export const Europe: Story = {
  args: {
    country: setContinentDummyCountry("EU"),
  },
};

export const NorthAmerica: Story = {
  args: {
    country: setContinentDummyCountry("NA"),
  },
};

export const SouthAmerica: Story = {
  args: {
    country: setContinentDummyCountry("SA"),
  },
};

export const Oceania: Story = {
  args: {
    country: setContinentDummyCountry("OC"),
  },
};

export const Africa: Story = {
  args: {
    country: setContinentDummyCountry("AF"),
  },
};

export const Antarctica: Story = {
  args: {
    country: setContinentDummyCountry("AN"),
  },
};

export const LikeAsia: Story = {
  args: {
    country: { ...setContinentDummyCountry("AS"), isLike: true },
  },
};
