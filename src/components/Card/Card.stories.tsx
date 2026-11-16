import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Assignment13/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const DefaultCard: Story = {
  args: {
    title: "UI Garden Card",
    description: "This is a sample card component built for Assignment 13.",
    footerText: "Last updated: Today",
  },
};
