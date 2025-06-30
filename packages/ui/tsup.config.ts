import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    "components/atoms/index": "src/components/atoms/index.ts",
    "components/molecules/index": "src/components/molecules/index.ts",
    "components/organisms/index": "src/components/organisms/index.ts",
    "hooks/index": "src/hooks/index.ts",
  },
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
});
