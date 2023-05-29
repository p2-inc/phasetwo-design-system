import type { Meta, StoryObj } from "@storybook/react";
import TextInput from "./RHFTextInput";

const meta = {
  title: "React Hook Form/Text Input",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  slug: "email",
  label: "Email",
  registerArgs: {
    pattern:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  inputArgs: {
    type: "email",
    placeholder: "you@email.com",
    required: true,
  },
};

export const Default: Story = {
  args: {
    inputArgs: {
      ...args,
    },
  },
};
