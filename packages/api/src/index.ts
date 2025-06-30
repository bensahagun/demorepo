// Export generated types
export * from "./generated/types/index.js";

// Export generated client functions
export * from "./generated/client/index.js";

// Export generated React Query hooks
export * from "./generated/hooks/index.js";

// Export generated Zod schemas
export * from "./generated/zod/index.js";

// Export the base client
export { apiClient as client } from "./client/apiClient.js";

export { userService } from "./services/users";
export * from "./types";
