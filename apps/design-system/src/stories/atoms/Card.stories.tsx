import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@demo/ui/atoms";

const meta: Meta<typeof Card> = {
  title: "Atoms/Card",
  component: Card,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "outlined", "elevated"],
    },
    padding: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg"],
    },
  },
  args: {
    children: "Card content goes here",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "This is a default card with some content inside.",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "This is an outlined card with a visible border.",
  },
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
    children: "This is an elevated card with a shadow effect.",
  },
};

export const NoPadding: Story = {
  args: {
    padding: "none",
    children: <div className="bg-blue-100 h-20 flex items-center justify-center">No padding content</div>,
  },
};

export const SmallPadding: Story = {
  args: {
    padding: "sm",
    children: "Small padding card content.",
  },
};

export const LargePadding: Story = {
  args: {
    padding: "lg",
    children: "Large padding card with more breathing room for content.",
  },
};

export const WithComplexContent: Story = {
  args: {
    variant: "outlined",
    padding: "md",
    children: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="text-gray-600">This card contains more complex content with multiple elements.</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Action</button>
          <button className="px-4 py-2 border border-gray-300 rounded">Cancel</button>
        </div>
      </div>
    ),
  },
};
