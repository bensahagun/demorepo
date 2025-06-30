import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "@demo/ui/molecules";

const meta: Meta<typeof DataTable> = {
  title: "Molecules/DataTable",
  component: DataTable,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Active", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Active", role: "Editor" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", status: "Pending", role: "User" },
];

const columns = [
  { key: "name" as const, label: "Name" },
  { key: "email" as const, label: "Email" },
  { key: "status" as const, label: "Status" },
  { key: "role" as const, label: "Role" },
];

export const Default: Story = {
  args: {
    data: sampleData,
    columns,
  },
};

export const EmptyState: Story = {
  args: {
    data: [],
    columns,
  },
};

export const SingleRow: Story = {
  args: {
    data: [sampleData[0]],
    columns,
  },
};

export const MinimalColumns: Story = {
  args: {
    data: sampleData,
    columns: [
      { key: "name" as const, label: "Name" },
      { key: "status" as const, label: "Status" },
    ],
  },
};
