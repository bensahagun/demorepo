import axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export type RequestConfig<TVariables = unknown> = {
  method: "GET" | "PUT" | "PATCH" | "POST" | "DELETE" | "OPTIONS";
  url: string;
  params?: unknown;
  data?: TVariables;
  responseType?: "arraybuffer" | "blob" | "document" | "json" | "text" | "stream";
  signal?: AbortSignal;
  headers?: AxiosRequestConfig["headers"];
};

export type ResponseConfig<TData = unknown> = AxiosResponse<TData>;
export type ResponseErrorConfig<TError = unknown> = AxiosError<TError>;

// Get API URL from environment or use default
const API_URL = process.env.DEMO_API_URL || "https://api.demo.com";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});

// Request interceptor to add auth token
axiosInstance.interceptors.request.use((config) => {
  // Add auth token if available (browser environment)
  if (typeof window !== "undefined" && typeof window.document !== "undefined") {
    const token = localStorage.getItem("demo_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  // Add common headers
  config.headers["Content-Type"] = "application/json";

  return config;
});

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Token expired or invalid - clear it
      if (typeof window !== "undefined") {
        localStorage.removeItem("demo_token");
      }
    }

    return Promise.reject(error);
  }
);

export const apiClient = async <TData, TError = unknown, TVariables = unknown>(
  config: RequestConfig<TVariables>
): Promise<ResponseConfig<TData>["data"]> => {
  return axiosInstance
    .request<TVariables, ResponseConfig<TData>>(config)
    .then(({ data }) => data)
    .catch((e: ResponseErrorConfig<TError>) => {
      throw e;
    });
};

export default apiClient;
