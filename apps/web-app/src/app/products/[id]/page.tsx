import { notFound } from "next/navigation";
import { useGetProductsId } from "@demo/api";
import { ProductViewer, RelatedProducts } from "@demo/ui/organisms";

interface PageProps {
  params: { id: string };
}

export default function ProductPage({ params }: PageProps) {
  const { data: product, isLoading, error } = useGetProductsId(params.id);

  if (error) notFound();
  if (isLoading) return <ProductSkeleton />;
  if (!product) notFound();

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto p-8">
        <ProductViewer product={product} />

        <Suspense fallback={<div>Loading related products...</div>}>
          <RelatedProducts category={product.category} excludeId={product.id} />
        </Suspense>
      </div>
    </main>
  );
}

const RelatedProducts = ({ category, excludeId }: { category: string; excludeId: string }) => {
  const { data: productsResponse } = useGetProducts({
    category,
    limit: 4,
  });

  const relatedProducts = productsResponse?.data?.filter((p) => p.id !== excludeId)?.slice(0, 4) || [];

  if (relatedProducts.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
