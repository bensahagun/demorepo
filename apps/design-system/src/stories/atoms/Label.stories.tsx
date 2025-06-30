import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@demo/ui/atoms";

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    required: {
      control: { type: "boolean" },
    },
  },
  args: {
    children: "Form Label",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Label",
  },
};

export const Required: Story = {
  args: {
    children: "Required Field",
    required: true,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Label",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium Label",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Label",
  },
};

export const RequiredLarge: Story = {
  args: {
    size: "lg",
    children: "Large Required Label",
    required: true,
  },
};
