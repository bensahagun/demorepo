import type { Meta, StoryObj } from "@storybook/react";
import { UserProfile } from "@demo/ui/organisms";

const meta: Meta<typeof UserProfile> = {
  title: "Organisms/UserProfile",
  component: UserProfile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      name: "John Doe",
      email: "john.doe@example.com",
    },
  },
};

export const WithAvatar: Story = {
  args: {
    user: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
  },
};

export const LongName: Story = {
  args: {
    user: {
      name: "Alexandra Cunningham-Montgomery",
      email: "alexandra.cunningham.montgomery@verylongdomainname.com",
    },
  },
};

export const ShortName: Story = {
  args: {
    user: {
      name: "Al",
      email: "al@test.co",
    },
  },
};
