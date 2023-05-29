import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "Form/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    secondary: true,
  },
};
