import type { Meta, StoryObj } from "@storybook/react";

import SquareBadge from "./square-badge";

const meta = {
  title: "Badges/Square",
  component: SquareBadge,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SquareBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "square",
  },
};
