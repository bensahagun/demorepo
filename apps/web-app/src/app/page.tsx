import { Button } from "@demo/ui/atoms";
import { UserProfile } from "@demo/ui/organisms";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Welcome to Demo App</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            <ul className="space-y-2">
              <li>✅ Shared UI Components</li>
              <li>✅ Type-safe API Client</li>
              <li>✅ Shared Configuration</li>
              <li>✅ Monorepo Architecture</li>
            </ul>
            <Button variant="primary">Get Started</Button>
          </div>

          <div>
            <UserProfile
              user={{
                name: "Demo User",
                email: "demo@example.com",
                avatar: "/placeholder-avatar.jpg",
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
