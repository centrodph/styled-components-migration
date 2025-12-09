// packages/linaria-theme/vite.config.ts
import { defineConfig } from "file:///Users/mac18gp/Sites/test/styled-components-migration/node_modules/.pnpm/vite@5.0.13_@types+node@18.16.9/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/mac18gp/Sites/test/styled-components-migration/node_modules/.pnpm/vite-plugin-dts@3.8.3_@types+node@18.16.9_rollup@4.53.3_typescript@5.4.5_vite@5.0.13_@types+node@18.16.9_/node_modules/vite-plugin-dts/dist/index.mjs";
import linaria from "file:///Users/mac18gp/Sites/test/styled-components-migration/node_modules/.pnpm/@linaria+vite@5.0.4_rollup@4.53.3_typescript@5.4.5_vite@5.0.13_@types+node@18.16.9_/node_modules/@linaria/vite/dist/index.mjs";
import * as path from "path";
import { nxViteTsPaths } from "file:///Users/mac18gp/Sites/test/styled-components-migration/node_modules/.pnpm/@nx+vite@18.3.3_@babel+traverse@7.28.5_@swc-node+register@1.8.0_@swc+core@1.3.107_@swc+_9db7e7194e99f41993552d29839c622e/node_modules/@nx/vite/plugins/nx-tsconfig-paths.plugin.js";
var __vite_injected_original_dirname = "/Users/mac18gp/Sites/test/styled-components-migration/packages/linaria-theme";
var vite_config_default = defineConfig({
  root: __vite_injected_original_dirname,
  plugins: [
    linaria({
      babelOptions: {
        presets: [
          ["@babel/preset-typescript", { allowNamespaces: true }]
        ]
      }
    }),
    nxViteTsPaths(),
    dts({
      entryRoot: "src",
      tsconfigPath: path.join(__vite_injected_original_dirname, "tsconfig.lib.json")
    })
  ],
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: "./dist",
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: "src/index.ts",
      name: "linaria-theme",
      fileName: "index",
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ["linaria", "@centrodphlibs/theme"],
      output: {
        // Ensure CSS is extracted and included
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") {
            return "style.css";
          }
          return assetInfo.name || "asset";
        }
      }
    },
    cssCodeSplit: false
    // Bundle all CSS into a single file
  },
  test: {
    globals: true,
    cache: {
      dir: "../../node_modules/.vitest"
    },
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: ["default"],
    coverage: {
      reportsDirectory: "../../coverage/packages/linaria-theme",
      provider: "v8"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicGFja2FnZXMvbGluYXJpYS10aGVtZS92aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9tYWMxOGdwL1NpdGVzL3Rlc3Qvc3R5bGVkLWNvbXBvbmVudHMtbWlncmF0aW9uL3BhY2thZ2VzL2xpbmFyaWEtdGhlbWVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9tYWMxOGdwL1NpdGVzL3Rlc3Qvc3R5bGVkLWNvbXBvbmVudHMtbWlncmF0aW9uL3BhY2thZ2VzL2xpbmFyaWEtdGhlbWUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL21hYzE4Z3AvU2l0ZXMvdGVzdC9zdHlsZWQtY29tcG9uZW50cy1taWdyYXRpb24vcGFja2FnZXMvbGluYXJpYS10aGVtZS92aXRlLmNvbmZpZy50c1wiOy8vLyA8cmVmZXJlbmNlIHR5cGVzPSd2aXRlc3QnIC8+XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcbmltcG9ydCBsaW5hcmlhIGZyb20gJ0BsaW5hcmlhL3ZpdGUnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IG54Vml0ZVRzUGF0aHMgfSBmcm9tICdAbngvdml0ZS9wbHVnaW5zL254LXRzY29uZmlnLXBhdGhzLnBsdWdpbic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJvb3Q6IF9fZGlybmFtZSxcblxuICBwbHVnaW5zOiBbXG4gICAgbGluYXJpYSh7XG4gICAgICBiYWJlbE9wdGlvbnM6IHtcbiAgICAgICAgcHJlc2V0czogW1xuICAgICAgICAgIFsnQGJhYmVsL3ByZXNldC10eXBlc2NyaXB0JywgeyBhbGxvd05hbWVzcGFjZXM6IHRydWUgfV0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIG54Vml0ZVRzUGF0aHMoKSxcbiAgICBkdHMoe1xuICAgICAgZW50cnlSb290OiAnc3JjJyxcbiAgICAgIHRzY29uZmlnUGF0aDogcGF0aC5qb2luKF9fZGlybmFtZSwgJ3RzY29uZmlnLmxpYi5qc29uJyksXG4gICAgfSksXG4gIF0sXG5cbiAgLy8gQ29uZmlndXJhdGlvbiBmb3IgYnVpbGRpbmcgeW91ciBsaWJyYXJ5LlxuICAvLyBTZWU6IGh0dHBzOi8vdml0ZWpzLmRldi9ndWlkZS9idWlsZC5odG1sI2xpYnJhcnktbW9kZVxuICBidWlsZDoge1xuICAgIG91dERpcjogJy4vZGlzdCcsXG4gICAgcmVwb3J0Q29tcHJlc3NlZFNpemU6IHRydWUsXG4gICAgY29tbW9uanNPcHRpb25zOiB7XG4gICAgICB0cmFuc2Zvcm1NaXhlZEVzTW9kdWxlczogdHJ1ZSxcbiAgICB9LFxuICAgIGxpYjoge1xuICAgICAgLy8gQ291bGQgYWxzbyBiZSBhIGRpY3Rpb25hcnkgb3IgYXJyYXkgb2YgbXVsdGlwbGUgZW50cnkgcG9pbnRzLlxuICAgICAgZW50cnk6ICdzcmMvaW5kZXgudHMnLFxuICAgICAgbmFtZTogJ2xpbmFyaWEtdGhlbWUnLFxuICAgICAgZmlsZU5hbWU6ICdpbmRleCcsXG4gICAgICAvLyBDaGFuZ2UgdGhpcyB0byB0aGUgZm9ybWF0cyB5b3Ugd2FudCB0byBzdXBwb3J0LlxuICAgICAgLy8gRG9uJ3QgZm9yZ2V0IHRvIHVwZGF0ZSB5b3VyIHBhY2thZ2UuanNvbiBhcyB3ZWxsLlxuICAgICAgZm9ybWF0czogWydlcycsICdjanMnXSxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIEV4dGVybmFsIHBhY2thZ2VzIHRoYXQgc2hvdWxkIG5vdCBiZSBidW5kbGVkIGludG8geW91ciBsaWJyYXJ5LlxuICAgICAgZXh0ZXJuYWw6IFsnbGluYXJpYScsICdAY2VudHJvZHBobGlicy90aGVtZSddLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIEVuc3VyZSBDU1MgaXMgZXh0cmFjdGVkIGFuZCBpbmNsdWRlZFxuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZSA9PT0gJ3N0eWxlLmNzcycpIHtcbiAgICAgICAgICAgIHJldHVybiAnc3R5bGUuY3NzJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFzc2V0SW5mby5uYW1lIHx8ICdhc3NldCc7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3NzQ29kZVNwbGl0OiBmYWxzZSwgLy8gQnVuZGxlIGFsbCBDU1MgaW50byBhIHNpbmdsZSBmaWxlXG4gIH0sXG5cbiAgdGVzdDoge1xuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgY2FjaGU6IHtcbiAgICAgIGRpcjogJy4uLy4uL25vZGVfbW9kdWxlcy8udml0ZXN0JyxcbiAgICB9LFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIGluY2x1ZGU6IFsnc3JjLyoqLyoue3Rlc3Qsc3BlY30ue2pzLG1qcyxjanMsdHMsbXRzLGN0cyxqc3gsdHN4fSddLFxuXG4gICAgcmVwb3J0ZXJzOiBbJ2RlZmF1bHQnXSxcbiAgICBjb3ZlcmFnZToge1xuICAgICAgcmVwb3J0c0RpcmVjdG9yeTogJy4uLy4uL2NvdmVyYWdlL3BhY2thZ2VzL2xpbmFyaWEtdGhlbWUnLFxuICAgICAgcHJvdmlkZXI6ICd2OCcsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sYUFBYTtBQUNwQixZQUFZLFVBQVU7QUFDdEIsU0FBUyxxQkFBcUI7QUFMOUIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBRU4sU0FBUztBQUFBLElBQ1AsUUFBUTtBQUFBLE1BQ04sY0FBYztBQUFBLFFBQ1osU0FBUztBQUFBLFVBQ1AsQ0FBQyw0QkFBNEIsRUFBRSxpQkFBaUIsS0FBSyxDQUFDO0FBQUEsUUFDeEQ7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsSUFDZCxJQUFJO0FBQUEsTUFDRixXQUFXO0FBQUEsTUFDWCxjQUFtQixVQUFLLGtDQUFXLG1CQUFtQjtBQUFBLElBQ3hELENBQUM7QUFBQSxFQUNIO0FBQUE7QUFBQTtBQUFBLEVBSUEsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1Isc0JBQXNCO0FBQUEsSUFDdEIsaUJBQWlCO0FBQUEsTUFDZix5QkFBeUI7QUFBQSxJQUMzQjtBQUFBLElBQ0EsS0FBSztBQUFBO0FBQUEsTUFFSCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUE7QUFBQTtBQUFBLE1BR1YsU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLElBQ3ZCO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQSxNQUViLFVBQVUsQ0FBQyxXQUFXLHNCQUFzQjtBQUFBLE1BQzVDLFFBQVE7QUFBQTtBQUFBLFFBRU4sZ0JBQWdCLENBQUMsY0FBYztBQUM3QixjQUFJLFVBQVUsU0FBUyxhQUFhO0FBQ2xDLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGlCQUFPLFVBQVUsUUFBUTtBQUFBLFFBQzNCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWM7QUFBQTtBQUFBLEVBQ2hCO0FBQUEsRUFFQSxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDUDtBQUFBLElBQ0EsYUFBYTtBQUFBLElBQ2IsU0FBUyxDQUFDLHNEQUFzRDtBQUFBLElBRWhFLFdBQVcsQ0FBQyxTQUFTO0FBQUEsSUFDckIsVUFBVTtBQUFBLE1BQ1Isa0JBQWtCO0FBQUEsTUFDbEIsVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
