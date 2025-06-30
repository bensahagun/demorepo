import { useGetProductsId, useGetUsersProfile } from "@demo/api";
import { useMemo } from "react";

export const useProductWithContext = (productId: string) => {
  const { data: product, isLoading: productLoading } = useGetProductsId(productId);
  const { data: userProfile } = useGetUsersProfile();

  const contextualData = useMemo(() => {
    if (!product || !userProfile) return null;

    const canEdit = userProfile.user?.role === "admin" || userProfile.user?.role === "moderator";

    const stockStatus = product.in_stock ? "In Stock" : "Out of Stock";
    const priceDisplay = `${product.currency} ${product.price}`;

    return {
      product,
      canEdit,
      stockStatus,
      priceDisplay,
      isOwner: false, // Could be enhanced with ownership logic
      lastUpdated: product.updated_at,
      // Analytics context (if available)
      performance: {
        views: product.metadata?.views || 0,
        conversions: product.metadata?.conversions || 0,
      },
    };
  }, [product, userProfile]);

  return {
    ...contextualData,
    isLoading: productLoading,
  };
};
