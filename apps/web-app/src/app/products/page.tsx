import { Suspense } from "react";
import { useGetProducts } from "@demo/api";
import { ProductCard, ProductGrid } from "@demo/ui/organisms";
import { SearchInput, Button } from "@demo/ui/atoms";

export default function ProductsPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Our Products</h1>

        <Suspense fallback={<ProductGridSkeleton />}>
          <ProductsContent />
        </Suspense>
      </div>
    </main>
  );
}

const ProductsContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const { data: productsResponse, isLoading } = useGetProducts({
    category: selectedCategory || undefined,
    search: searchQuery || undefined,
    limit: 20,
  });

  const products = productsResponse?.data || [];

  return (
    <>
      <div className="mb-8 flex gap-4">
        <SearchInput
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1"
        />
        <CategoryFilter value={selectedCategory} onChange={setSelectedCategory} />
      </div>

      <ProductGrid products={products} isLoading={isLoading} />
    </>
  );
};
