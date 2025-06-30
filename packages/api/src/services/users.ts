import { apiClient } from "../client";
import { User, CreateUser, UserSchema } from "../types";

export const userService = {
  async getUsers(): Promise<User[]> {
    const users = await apiClient.get<User[]>("/users");
    return users.map((user) => UserSchema.parse(user));
  },

  async getUser(id: string): Promise<User> {
    const user = await apiClient.get<User>(`/users/${id}`);
    return UserSchema.parse(user);
  },

  async createUser(userData: CreateUser): Promise<User> {
    const user = await apiClient.post<User>("/users", userData);
    return UserSchema.parse(user);
  },

  async updateUser(id: string, userData: Partial<CreateUser>): Promise<User> {
    const user = await apiClient.put<User>(`/users/${id}`, userData);
    return UserSchema.parse(user);
  },

  async deleteUser(id: string): Promise<void> {
    await apiClient.delete(`/users/${id}`);
  },
};
