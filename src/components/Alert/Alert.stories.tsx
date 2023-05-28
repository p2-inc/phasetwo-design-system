import type { Meta, StoryObj } from "@storybook/react";

import Alert from "./Alert";

const meta = {
  title: "Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    body: "Body",
    title: "Title",
    type: "success",
  },
};

export const Danger: Story = {
  args: {
    body: "Body",
    title: "Title",
    type: "danger",
  },
};

export const Info: Story = {
  args: {
    body: "Body",
    title: "Title",
    type: "info",
  },
};

export const Warning: Story = {
  args: {
    body: "Body",
    title: "Title",
    type: "warning",
  },
};
