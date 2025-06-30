import { createContext, useContext, useEffect, useState } from "react";
import { usePostAuthLogin, useGetUsersProfile } from "@demo/api";
import { UserProfile } from "@demo/api/types";

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("auth_token"));

  const { data: profileData, isLoading } = useGetUsersProfile({
    enabled: !!token,
  });

  const loginMutation = usePostAuthLogin();

  const login = async (email: string, password: string) => {
    const response = await loginMutation.mutateAsync({ email, password });
    const { token: newToken } = response;

    setToken(newToken);
    localStorage.setItem("auth_token", newToken);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("auth_token");
  };

  const value = {
    user: profileData?.user || null,
    isAuthenticated: !!profileData?.user,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
