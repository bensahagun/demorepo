import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginZod } from "@kubb/plugin-zod";
import { pluginReactQuery } from "@kubb/plugin-react-query";
import { pluginClient } from "@kubb/plugin-client";

export default defineConfig(() => {
  return {
    root: ".",
    input: {
      path: "./src/schema/demo.json",
    },
    output: {
      path: "./src/generated",
      clean: true,
    },
    plugins: [
      pluginOas(),
      pluginTs({
        output: {
          path: "./types",
          banner(oas) {
            return `// Generated from ${oas.api.info.title} v${oas.api.info.version}`;
          },
        },
        group: {
          type: "tag",
          name({ group }) {
            return group.toLowerCase().replace(/\s+/g, "-");
          },
        },
      }),
      pluginReactQuery({
        output: {
          path: "./hooks",
        },
        group: {
          type: "tag",
          name({ group }) {
            return group.toLowerCase().replace(/\s+/g, "-");
          },
        },
        client: {
          importPath: "../../client/apiClient.ts",
          dataReturnType: "data",
        },
        paramsType: "inline",
        pathParamsType: "inline",
        suspense: false,
      }),
      pluginZod({
        output: {
          path: "./zod",
        },
        group: {
          type: "tag",
          name({ group }) {
            return group.toLowerCase().replace(/\s+/g, "-");
          },
        },
        typed: true,
        dateType: "stringOffset",
        unknownType: "unknown",
        importPath: "zod",
      }),
      pluginClient({
        importPath: "../client/apiClient.ts",
        output: {
          path: "./client",
          barrelType: "all",
        },
        parser: "client",
        pathParamsType: "inline",
        dataReturnType: "full",
      }),
    ],
  };
});
