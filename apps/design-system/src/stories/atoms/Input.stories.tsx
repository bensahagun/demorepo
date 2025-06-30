import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@demo/ui/atoms";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "error"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url"],
    },
  },
  args: {
    placeholder: "Enter text...",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    placeholder: "Default input",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    placeholder: "Error state input",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    placeholder: "Small input",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    placeholder: "Medium input",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    placeholder: "Large input",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Enter email address",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: "Pre-filled value",
  },
};
