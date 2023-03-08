import type { Meta, StoryObj } from "@storybook/react";
import InfoContent from "./InfoContent";

const meta: Meta<typeof InfoContent> = {
  title: "Organisms/InfoContent",
  component: InfoContent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InfoContent>;

export const Korea: Story = {
  args: {
    continent: {
      code: "AS",
      name: "Asia",
    },
    currency: "KRW",
    languages: [
      {
        code: "KR",
        name: "Korean",
        native: "한국어",
        rtl: false,
      },
    ],
    phone: "82",
    states: [],
  },
};
