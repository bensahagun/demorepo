import type { Meta, StoryObj } from '@storybook/react'
import { DashboardLayout } from '@demo/ui/organisms'

const meta: Meta<typeof DashboardLayout> = {
  title: 'Organisms/DashboardLayout',
  component: DashboardLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard Content</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-semibold mb-2">Card 1</h2>
            <p className="text-gray-600">Some content here</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-semibold mb-2">Card 2</h2>
            <p className="text-gray-600">Some content here</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-semibold mb-2">Card 3</h2>
            <p className="text-gray-600">Some content here</p>
          </div>
        </div>
      </div>
    ),
  },
}

export const WithSidebar: Story = {
  args: {
    children: (
      <div className="flex gap-6 p-6">
        <aside className="w-64 bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-4">Sidebar</h3>
          <nav className="space-y-2">
            <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
              Dashboard
            </a>
            <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
              Users
            </a>
            <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">
              Settings
            </a>
          </nav>
        </aside>
        <main className="flex-1">
          <h1 className="text-2xl font-bold mb-4">Main Content</h1>
          <div className="bg-white p-6 rounded-lg shadow">
            <p>This is the main content area with a sidebar layout.</p>
          </div>
        </main>
      </div>
    ),
  },
} 