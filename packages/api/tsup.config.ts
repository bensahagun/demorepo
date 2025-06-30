import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    types: "src/generated/types/index.ts",
    hooks: "src/generated/hooks/index.ts",
    zod: "src/generated/zod/index.ts",
    client: "src/generated/client/index.ts",
  },
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  external: ["@tanstack/react-query", "react"],
});
