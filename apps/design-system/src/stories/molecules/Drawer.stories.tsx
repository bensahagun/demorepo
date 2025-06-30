import type { Meta, StoryObj } from "@storybook/react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@demo/ui/molecules";
import { Button } from "@demo/ui/atoms";

const DrawerDemo = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>
            This is a description of what this drawer contains or what action it performs.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-6">
          <p className="text-gray-600 mb-4">
            This is the main content area of the drawer. You can put any content here like forms, lists, or other
            components.
          </p>
          <div className="space-y-2">
            <div className="p-3 border rounded">Item 1</div>
            <div className="p-3 border rounded">Item 2</div>
            <div className="p-3 border rounded">Item 3</div>
          </div>
        </div>
        <DrawerFooter>
          <Button variant="primary">Save Changes</Button>
          <DrawerClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const DrawerWithForm = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">Open Form Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Create New Item</DrawerTitle>
          <DrawerDescription>Fill out the form below to create a new item.</DrawerDescription>
        </DrawerHeader>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full p-2 border rounded-md" placeholder="Enter email" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea className="w-full p-2 border rounded-md h-20" placeholder="Enter description" />
          </div>
        </div>
        <DrawerFooter>
          <Button variant="primary">Create Item</Button>
          <DrawerClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const meta: Meta<typeof Drawer> = {
  title: "Molecules/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <DrawerDemo />,
};

export const WithForm: Story = {
  render: () => <DrawerWithForm />,
};

export const SimpleDrawer: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="destructive">Delete Item</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Confirm Deletion</DrawerTitle>
          <DrawerDescription>
            Are you sure you want to delete this item? This action cannot be undone.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button variant="destructive">Delete</Button>
          <DrawerClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};
