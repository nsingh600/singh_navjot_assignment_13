import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Assignment13/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Primary Button",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: "Secondary Button",
    size: "medium",
  },
};
