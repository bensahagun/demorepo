import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "@demo/ui/atoms";

const meta: Meta<typeof Toast> = {
  title: "Atoms/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "success", "error", "warning"],
    },
    showIcon: {
      control: { type: "boolean" },
    },
  },
  args: {
    title: "Notification",
    description: "This is a toast notification",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    title: "Information",
    description: "This is a default toast notification",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success!",
    description: "Your action was completed successfully",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    description: "Something went wrong, please try again",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    description: "Please review your input before proceeding",
  },
};

export const WithoutIcon: Story = {
  args: {
    variant: "success",
    title: "Success",
    description: "Toast without icon",
    showIcon: false,
  },
};

export const TitleOnly: Story = {
  args: {
    variant: "default",
    title: "Simple notification",
  },
};

export const DescriptionOnly: Story = {
  args: {
    variant: "default",
    description: "Just a description without title",
  },
};

export const LongContent: Story = {
  args: {
    variant: "default",
    title: "Long notification title that might wrap to multiple lines",
    description:
      "This is a very long description that demonstrates how the toast handles longer content. It should wrap nicely and maintain good readability even with extended text.",
  },
};
