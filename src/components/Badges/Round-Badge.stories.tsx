import type { Meta, StoryObj } from "@storybook/react";

import RoundBadge from "./round-badge";

const meta = {
  title: "Badges/Round",
  component: RoundBadge,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof RoundBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "round",
  },
};
