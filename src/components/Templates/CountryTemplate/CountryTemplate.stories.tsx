import type { Meta, StoryObj } from "@storybook/react";

import CountryTemplate from "./CountryTemplate";

const meta: Meta<typeof CountryTemplate> = {
  title: "Templates/CountryTemplate",
  component: CountryTemplate,
};

export default meta;
type Story = StoryObj<typeof CountryTemplate>;

export const Country: Story = {
  args: {},
};
