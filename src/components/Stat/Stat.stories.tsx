import type { Meta, StoryObj } from "@storybook/react";

import Stat from "./Stat";

const meta = {
  title: "Stat",
  component: Stat,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Stat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    label: "Label",
    value: "10",
    hoverPercentText: "Hover percent text",
    percent: 65,
  },
};

export const NoPercent: Story = {
  args: {
    label: "Label",
    value: "10",
  },
};
