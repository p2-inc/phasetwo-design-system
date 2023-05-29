import type { Meta, StoryObj } from "@storybook/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import TextInput from "./TextInput";
import React from "react";

const meta = {
  title: "Form/Text Input",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  placeholder: "search",
  type: "text",
  name: "storybook",
  id: "storybook",
};

export const SearchIcon: Story = {
  args: {
    inputArgs: args,
    icon: "search",
  },
};

export const NoIcon: Story = {
  args: {
    inputArgs: args,
  },
};

export const CustomIcon: Story = {
  args: {
    inputArgs: args,
    icon: (
      <MagnifyingGlassIcon
        className="h-5 w-5 text-p2blue-900"
        aria-hidden="true"
      />
    ),
  },
};
