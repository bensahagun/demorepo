import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "@demo/ui/molecules";
import { Button } from "@demo/ui/atoms";

const meta: Meta<typeof DataTable> = {
  title: "Molecules/DataTable",
  component: DataTable,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    searchable: {
      control: { type: "boolean" },
    },
    pageSize: {
      control: { type: "number" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Active", role: "Admin", joinDate: "2023-01-15" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive", role: "User", joinDate: "2023-02-20" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Active", role: "Editor", joinDate: "2023-03-10" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", status: "Pending", role: "User", joinDate: "2023-04-05" },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie@example.com",
    status: "Active",
    role: "Admin",
    joinDate: "2023-05-12",
  },
  {
    id: 6,
    name: "Diana Davis",
    email: "diana@example.com",
    status: "Inactive",
    role: "Editor",
    joinDate: "2023-06-18",
  },
  { id: 7, name: "Eva Garcia", email: "eva@example.com", status: "Active", role: "User", joinDate: "2023-07-22" },
  { id: 8, name: "Frank Miller", email: "frank@example.com", status: "Pending", role: "User", joinDate: "2023-08-30" },
];

const basicColumns = [
  { key: "name" as const, label: "Name", sortable: true },
  { key: "email" as const, label: "Email", sortable: true },
  { key: "status" as const, label: "Status", sortable: true },
  { key: "role" as const, label: "Role", sortable: true },
];

const columnsWithActions = [
  { key: "name" as const, label: "Name", sortable: true },
  { key: "email" as const, label: "Email", sortable: true },
  {
    key: "status" as const,
    label: "Status",
    sortable: true,
    render: (value: string) => (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === "Active"
            ? "bg-green-100 text-green-800"
            : value === "Inactive"
              ? "bg-red-100 text-red-800"
              : "bg-yellow-100 text-yellow-800"
        }`}
      >
        {value}
      </span>
    ),
  },
  { key: "role" as const, label: "Role", sortable: true },
  {
    key: "id" as const,
    label: "Actions",
    render: (value: number, item: any) => (
      <div className="flex gap-2">
        <Button size="sm" variant="secondary">
          Edit
        </Button>
        <Button size="sm" variant="destructive">
          Delete
        </Button>
      </div>
    ),
  },
];

export const Default: Story = {
  args: {
    data: sampleData,
    columns: basicColumns,
  },
};

export const WithSearch: Story = {
  args: {
    data: sampleData,
    columns: basicColumns,
    searchable: true,
    searchPlaceholder: "Search users...",
  },
};

export const WithPagination: Story = {
  args: {
    data: sampleData,
    columns: basicColumns,
    pageSize: 3,
  },
};

export const WithSearchAndPagination: Story = {
  args: {
    data: sampleData,
    columns: basicColumns,
    searchable: true,
    pageSize: 4,
  },
};

export const WithCustomRendering: Story = {
  args: {
    data: sampleData,
    columns: columnsWithActions,
    searchable: true,
  },
};

export const EmptyState: Story = {
  args: {
    data: [],
    columns: basicColumns,
    searchable: true,
    emptyMessage: "No users found",
  },
};

export const SingleRow: Story = {
  args: {
    data: [sampleData[0]],
    columns: basicColumns,
  },
};

export const MinimalColumns: Story = {
  args: {
    data: sampleData,
    columns: [
      { key: "name" as const, label: "Name", sortable: true },
      { key: "status" as const, label: "Status", sortable: true },
    ],
    searchable: true,
  },
};

export const LargeDataset: Story = {
  args: {
    data: Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      status: ["Active", "Inactive", "Pending"][i % 3],
      role: ["Admin", "User", "Editor"][i % 3],
      joinDate: `2023-${String(Math.floor(i / 4) + 1).padStart(2, "0")}-${String((i % 28) + 1).padStart(2, "0")}`,
    })),
    columns: basicColumns,
    searchable: true,
    pageSize: 10,
  },
};
