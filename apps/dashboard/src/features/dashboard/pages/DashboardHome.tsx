import { useGetProducts, useGetUsersProfile } from "@demo/api";
import { DashboardLayout } from "@demo/ui/organisms";
import { Card, Button } from "@demo/ui/atoms";
import { BarChart, TrendingUpIcon, PackageIcon, UsersIcon } from "lucide-react";

export const DashboardHome = () => {
  const { data: userProfile } = useGetUsersProfile();
  const { data: productsResponse } = useGetProducts({ limit: 100 }); // Get all for stats

  const stats = useMemo(() => {
    const products = productsResponse?.data || [];
    return {
      totalProducts: products.length,
      inStockProducts: products.filter((p) => p.in_stock).length,
      categories: [...new Set(products.map((p) => p.category).filter(Boolean))].length,
      averagePrice: products.reduce((sum, p) => sum + p.price, 0) / products.length || 0,
    };
  }, [productsResponse]);

  return (
    <DashboardLayout title="Dashboard">
      <div className="space-y-6">
        {/* Welcome Section */}
        <WelcomeSection user={userProfile?.user} />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Products"
            value={stats.totalProducts}
            icon={<PackageIcon className="w-6 h-6" />}
            trend="+12%"
          />
          <StatCard
            title="In Stock"
            value={stats.inStockProducts}
            icon={<TrendingUpIcon className="w-6 h-6" />}
            trend="+5%"
          />
          <StatCard title="Categories" value={stats.categories} icon={<BarChart className="w-6 h-6" />} />
          <StatCard
            title="Avg. Price"
            value={`$${stats.averagePrice.toFixed(2)}`}
            icon={<UsersIcon className="w-6 h-6" />}
          />
        </div>

        {/* Recent Products */}
        <RecentProductsSection />

        {/* Quick Actions */}
        <QuickActionsSection canManage={userProfile?.user?.role === "admin"} />
      </div>
    </DashboardLayout>
  );
};
