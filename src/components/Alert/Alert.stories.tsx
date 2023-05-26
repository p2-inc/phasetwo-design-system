import type { Meta, StoryObj } from "@storybook/react";

import Alert from "./Alert";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
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

// export const Secondary: Story = {
//   args: {
//     label: "Button",
//   },
// };

// export const Large: Story = {
//   args: {
//     size: "large",
//     label: "Button",
//   },
// };

// export const Small: Story = {
//   args: {
//     size: "small",
//     label: "Button",
//   },
// };
