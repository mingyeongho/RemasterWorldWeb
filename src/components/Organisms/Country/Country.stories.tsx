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
    country: {
      code: "KR",
      emoji: "🇰🇷",
      name: "Korea",
      languages: [
        {
          code: "KR",
          name: "Korean",
          native: "한국어",
          rtl: false,
        },
      ],
      continent: {
        code: "AS",
        name: "Asia",
      },
    },
  },
};

export const Europe: Story = {
  args: {
    country: {
      code: "KR",
      emoji: "🇰🇷",
      name: "Korea",
      languages: [
        {
          code: "KR",
          name: "Korean",
          native: "한국어",
          rtl: false,
        },
      ],
      continent: {
        code: "EU",
        name: "Europe",
      },
    },
  },
};

export const NorthAmerica: Story = {
  args: {
    country: {
      code: "KR",
      emoji: "🇰🇷",
      name: "Korea",
      languages: [
        {
          code: "KR",
          name: "Korean",
          native: "한국어",
          rtl: false,
        },
      ],
      continent: {
        code: "NA",
        name: "NorthAmerica",
      },
    },
  },
};

export const SouthAmerica: Story = {
  args: {
    country: {
      code: "KR",
      emoji: "🇰🇷",
      name: "Korea",
      languages: [
        {
          code: "KR",
          name: "Korean",
          native: "한국어",
          rtl: false,
        },
      ],
      continent: {
        code: "SA",
        name: "SouthAmerica",
      },
    },
  },
};

export const Oceania: Story = {
  args: {
    country: {
      code: "KR",
      emoji: "🇰🇷",
      name: "Korea",
      languages: [
        {
          code: "KR",
          name: "Korean",
          native: "한국어",
          rtl: false,
        },
      ],
      continent: {
        code: "OC",
        name: "Oceania",
      },
    },
  },
};

export const Africa: Story = {
  args: {
    country: {
      code: "KR",
      emoji: "🇰🇷",
      name: "Korea",
      languages: [
        {
          code: "KR",
          name: "Korean",
          native: "한국어",
          rtl: false,
        },
      ],
      continent: {
        code: "AF",
        name: "Africa",
      },
    },
  },
};

export const Antarctica: Story = {
  args: {
    country: {
      code: "KR",
      emoji: "🇰🇷",
      name: "Korea",
      languages: [
        {
          code: "KR",
          name: "Korean",
          native: "한국어",
          rtl: false,
        },
      ],
      continent: {
        code: "AN",
        name: "Antarctica",
      },
    },
  },
};
