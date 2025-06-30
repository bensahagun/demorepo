import { Button } from "@demo/ui/atoms";
import { DataTable } from "@demo/ui/molecules";
import { DashboardLayout } from "@demo/ui/organisms";

function App() {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Demo Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <Button variant="primary" size="sm">
                Create New
              </Button>
              <Button variant="secondary" size="sm">
                Import Data
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <DataTable
              data={[
                { id: 1, name: "Item 1", status: "Active" },
                { id: 2, name: "Item 2", status: "Pending" },
              ]}
              columns={[
                { key: "name", label: "Name" },
                { key: "status", label: "Status" },
              ]}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default App;
