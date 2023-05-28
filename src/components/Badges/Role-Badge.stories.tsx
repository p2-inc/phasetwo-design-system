import type { Meta, StoryObj } from "@storybook/react";

import RoleBadge from "./role-badge";

const meta = {
  title: "Badges/Role",
  component: RoleBadge,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof RoleBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Manage: Story = {
  args: {
    name: "manage-roles",
  },
};

export const View: Story = {
  args: {
    name: "view-roles",
  },
};
