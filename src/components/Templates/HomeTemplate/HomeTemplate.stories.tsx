import type { Meta, StoryObj } from "@storybook/react";
import { ChangeEvent, FormEvent } from "react";

import HomeTemplate from "./HomeTemplate";

const meta: Meta<typeof HomeTemplate> = {
  title: "Templates/HomeTemplate",
  component: HomeTemplate,
};

export default meta;
type Story = StoryObj<typeof HomeTemplate>;

export const Home: Story = {
  args: {
    value: "",
    onChange: (e: ChangeEvent<HTMLInputElement>) => {},
    onSearch: (e: FormEvent) => {},
    countries: [
      {
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
    ],
  },
};
