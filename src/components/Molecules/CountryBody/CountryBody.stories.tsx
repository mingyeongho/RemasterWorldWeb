import type { Meta, StoryObj } from "@storybook/react";
import CountryBody from "./CountryBody";

const meta: Meta<typeof CountryBody> = {
  title: "Molecules/CountryBody",
  component: CountryBody,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CountryBody>;

export const Primary: Story = {
  args: {
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
  },
};
