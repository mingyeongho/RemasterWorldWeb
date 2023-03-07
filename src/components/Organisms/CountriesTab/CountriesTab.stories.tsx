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
  args: {
    countries: [
      {
        code: "KR",
        name: "Korea",
        continent: {
          code: "AS",
          name: "Asia",
        },
        emoji: "🇰🇷",
        languages: [
          {
            code: "KR",
            name: "Korean",
            native: "한국어",
            rtl: false,
          },
        ],
      },
      {
        code: "KR",
        name: "Korea",
        continent: {
          code: "AS",
          name: "Asia",
        },
        emoji: "🇰🇷",
        languages: [
          {
            code: "KR",
            name: "Korean",
            native: "한국어",
            rtl: false,
          },
        ],
      },
      {
        code: "KR",
        name: "Korea",
        continent: {
          code: "AS",
          name: "Asia",
        },
        emoji: "🇰🇷",
        languages: [
          {
            code: "KR",
            name: "Korean",
            native: "한국어",
            rtl: false,
          },
        ],
      },
      {
        code: "KR",
        name: "Korea",
        continent: {
          code: "AS",
          name: "Asia",
        },
        emoji: "🇰🇷",
        languages: [
          {
            code: "KR",
            name: "Korean",
            native: "한국어",
            rtl: false,
          },
        ],
      },
    ],
  },
};
