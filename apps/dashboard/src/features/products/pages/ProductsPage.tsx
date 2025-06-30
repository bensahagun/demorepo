import { useState } from "react";
import { useDebouncedEffect } from "@react-hookz/web";
import { Button, SearchInput } from "@demo/ui/atoms";
import { DataTable } from "@demo/ui/molecules";
import { DashboardLayout } from "@demo/ui/organisms";
import { PlusIcon, FilterIcon } from "lucide-react";
import { useGetProducts, useGetUsersProfile } from "@demo/api";
import { useUserContext } from "../../../hooks/useUserContext";

export const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(1);
  const [localSearch, setLocalSearch] = useState("");

  const { canManageProducts } = useUserContext();

  // Debounced search
  useDebouncedEffect(
    () => {
      setSearchQuery(localSearch);
      setPage(1); // Reset to first page on search
    },
    [localSearch],
    500
  );

  const {
    data: productsResponse,
    isLoading,
    error,
  } = useGetProducts({
    page,
    limit: 12,
    category: selectedCategory || undefined,
    search: searchQuery || undefined,
  });

  const products = productsResponse?.data || [];
  const pagination = productsResponse?.pagination;

  return (
    <DashboardLayout title='Products' actions={canManageProducts ? <CreateProductButton /> : undefined}>
      <div className='flex flex-col space-y-6'>
        {/* Search and Filters */}
        <div className='flex flex-col sm:flex-row gap-4'>
          <SearchInput
            className='flex-1'
            placeholder='Search products...'
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
          <CategoryFilter value={selectedCategory} onChange={setSelectedCategory} />
        </div>

        {/* Products Grid */}
        <ProductsGrid products={products} isLoading={isLoading} error={error} />

        {/* Pagination */}
        {pagination && <Pagination currentPage={page} totalPages={pagination.pages} onPageChange={setPage} />}
      </div>
    </DashboardLayout>
  );
};

const CreateProductButton = () => (
  <Button variant='primary' size='regular'>
    <PlusIcon className='w-5 h-5' />
    Add Product
  </Button>
);
