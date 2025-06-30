import type { Meta, StoryObj } from "@storybook/react";
import { ToastProvider, useToast } from "@demo/ui/atoms";
import { Button } from "@demo/ui/atoms";

const ToastDemo = () => {
  const { addToast } = useToast();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Toast Demo</h3>
      <p className="text-gray-600">Click the buttons below to trigger different types of toasts:</p>
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() =>
            addToast({
              title: "Success!",
              description: "Your action was completed successfully",
              variant: "success",
            })
          }
          variant="primary"
        >
          Show Success Toast
        </Button>
        <Button
          onClick={() =>
            addToast({
              title: "Error!",
              description: "Something went wrong",
              variant: "error",
            })
          }
          variant="destructive"
        >
          Show Error Toast
        </Button>
        <Button
          onClick={() =>
            addToast({
              title: "Warning",
              description: "Please be careful",
              variant: "warning",
            })
          }
          variant="secondary"
        >
          Show Warning Toast
        </Button>
        <Button
          onClick={() =>
            addToast({
              title: "Info",
              description: "Here's some information",
              variant: "default",
            })
          }
          variant="secondary"
        >
          Show Info Toast
        </Button>
        <Button
          onClick={() =>
            addToast({
              description: "Quick message without title",
              variant: "default",
              duration: 2000,
            })
          }
          variant="secondary"
        >
          Quick Toast (2s)
        </Button>
      </div>
    </div>
  );
};

const meta: Meta<typeof ToastProvider> = {
  title: "Atoms/Toaster",
  component: ToastProvider,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  ),
};
