import { useGetUsersProfile } from "@demo/api";
import { useQuery } from "@tanstack/react-query";

export const useUserContext = () => {
  const { data: profile, isLoading, error } = useGetUsersProfile();

  return {
    user: profile?.user,
    isAuthenticated: !!profile?.user,
    isLoading,
    error,
    // Computed context
    isAdmin: profile?.user?.role === "admin",
    isModerator: profile?.user?.role === "moderator",
    canManageProducts: ["admin", "moderator"].includes(profile?.user?.role || ""),
  };
};
