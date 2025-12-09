// packages/css-modules-theme/vite.config.ts
import { defineConfig } from "file:///Users/mac18gp/Sites/test/styled-components-migration/node_modules/.pnpm/vite@5.0.13_@types+node@18.16.9/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/mac18gp/Sites/test/styled-components-migration/node_modules/.pnpm/vite-plugin-dts@3.8.3_@types+node@18.16.9_rollup@4.53.3_typescript@5.4.5_vite@5.0.13_@types+node@18.16.9_/node_modules/vite-plugin-dts/dist/index.mjs";
import * as path from "path";
import { nxViteTsPaths } from "file:///Users/mac18gp/Sites/test/styled-components-migration/node_modules/.pnpm/@nx+vite@18.3.3_@babel+traverse@7.28.5_@swc-node+register@1.8.0_@swc+core@1.3.107_@swc+_9db7e7194e99f41993552d29839c622e/node_modules/@nx/vite/plugins/nx-tsconfig-paths.plugin.js";
var __vite_injected_original_dirname = "/Users/mac18gp/Sites/test/styled-components-migration/packages/css-modules-theme";
var vite_config_default = defineConfig({
  root: __vite_injected_original_dirname,
  plugins: [
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
      name: "css-modules-theme",
      fileName: "index",
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@centrodphlibs/theme"
      ],
      output: {
        /**
         * Configure asset file names to ensure CSS is output to the correct location.
         * Since cssCodeSplit is false, all CSS will be bundled into a single file.
         * We need to output it to lib/theme.css to match the package.json export path.
         */
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "lib/theme.css";
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
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: ["default"],
    coverage: {
      reportsDirectory: "../../coverage/packages/css-modules-theme",
      provider: "v8"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicGFja2FnZXMvY3NzLW1vZHVsZXMtdGhlbWUvdml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWFjMThncC9TaXRlcy90ZXN0L3N0eWxlZC1jb21wb25lbnRzLW1pZ3JhdGlvbi9wYWNrYWdlcy9jc3MtbW9kdWxlcy10aGVtZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL21hYzE4Z3AvU2l0ZXMvdGVzdC9zdHlsZWQtY29tcG9uZW50cy1taWdyYXRpb24vcGFja2FnZXMvY3NzLW1vZHVsZXMtdGhlbWUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL21hYzE4Z3AvU2l0ZXMvdGVzdC9zdHlsZWQtY29tcG9uZW50cy1taWdyYXRpb24vcGFja2FnZXMvY3NzLW1vZHVsZXMtdGhlbWUvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz0ndml0ZXN0JyAvPlxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgbnhWaXRlVHNQYXRocyB9IGZyb20gJ0BueC92aXRlL3BsdWdpbnMvbngtdHNjb25maWctcGF0aHMucGx1Z2luJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcm9vdDogX19kaXJuYW1lLFxuICBwbHVnaW5zOiBbXG4gICAgbnhWaXRlVHNQYXRocygpLFxuICAgIGR0cyh7XG4gICAgICBlbnRyeVJvb3Q6ICdzcmMnLFxuICAgICAgdHNjb25maWdQYXRoOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAndHNjb25maWcubGliLmpzb24nKSxcbiAgICB9KSxcbiAgXSxcbiAgLy8gQ29uZmlndXJhdGlvbiBmb3IgYnVpbGRpbmcgeW91ciBsaWJyYXJ5LlxuICAvLyBTZWU6IGh0dHBzOi8vdml0ZWpzLmRldi9ndWlkZS9idWlsZC5odG1sI2xpYnJhcnktbW9kZVxuICBidWlsZDoge1xuICAgIG91dERpcjogJy4vZGlzdCcsXG4gICAgcmVwb3J0Q29tcHJlc3NlZFNpemU6IHRydWUsXG4gICAgY29tbW9uanNPcHRpb25zOiB7XG4gICAgICB0cmFuc2Zvcm1NaXhlZEVzTW9kdWxlczogdHJ1ZSxcbiAgICB9LFxuICAgIGxpYjoge1xuICAgICAgLy8gQ291bGQgYWxzbyBiZSBhIGRpY3Rpb25hcnkgb3IgYXJyYXkgb2YgbXVsdGlwbGUgZW50cnkgcG9pbnRzLlxuICAgICAgZW50cnk6ICdzcmMvaW5kZXgudHMnLFxuICAgICAgbmFtZTogJ2Nzcy1tb2R1bGVzLXRoZW1lJyxcbiAgICAgIGZpbGVOYW1lOiAnaW5kZXgnLFxuICAgICAgLy8gQ2hhbmdlIHRoaXMgdG8gdGhlIGZvcm1hdHMgeW91IHdhbnQgdG8gc3VwcG9ydC5cbiAgICAgIC8vIERvbid0IGZvcmdldCB0byB1cGRhdGUgeW91ciBwYWNrYWdlLmpzb24gYXMgd2VsbC5cbiAgICAgIGZvcm1hdHM6IFsnZXMnLCAnY2pzJ10sXG4gICAgfSxcblxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIEV4dGVybmFsIHBhY2thZ2VzIHRoYXQgc2hvdWxkIG5vdCBiZSBidW5kbGVkIGludG8geW91ciBsaWJyYXJ5LlxuICAgICAgZXh0ZXJuYWw6IFtcbiAgICAgICAgJ3JlYWN0JyxcbiAgICAgICAgJ3JlYWN0LWRvbScsXG4gICAgICAgICdyZWFjdC9qc3gtcnVudGltZScsXG4gICAgICAgICdAY2VudHJvZHBobGlicy90aGVtZScsXG4gICAgICBdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25maWd1cmUgYXNzZXQgZmlsZSBuYW1lcyB0byBlbnN1cmUgQ1NTIGlzIG91dHB1dCB0byB0aGUgY29ycmVjdCBsb2NhdGlvbi5cbiAgICAgICAgICogU2luY2UgY3NzQ29kZVNwbGl0IGlzIGZhbHNlLCBhbGwgQ1NTIHdpbGwgYmUgYnVuZGxlZCBpbnRvIGEgc2luZ2xlIGZpbGUuXG4gICAgICAgICAqIFdlIG5lZWQgdG8gb3V0cHV0IGl0IHRvIGxpYi90aGVtZS5jc3MgdG8gbWF0Y2ggdGhlIHBhY2thZ2UuanNvbiBleHBvcnQgcGF0aC5cbiAgICAgICAgICovXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgICAgLy8gQWxsIENTUyBmaWxlcyAod2l0aCBjc3NDb2RlU3BsaXQ6IGZhbHNlLCB0aGVyZSBzaG91bGQgb25seSBiZSBvbmUpXG4gICAgICAgICAgLy8gc2hvdWxkIGJlIG91dHB1dCB0byBsaWIvdGhlbWUuY3NzIGFzIGV4cGVjdGVkIGJ5IHBhY2thZ2UuanNvbiBleHBvcnRzXG4gICAgICAgICAgaWYgKGFzc2V0SW5mby5uYW1lICYmIGFzc2V0SW5mby5uYW1lLmVuZHNXaXRoKCcuY3NzJykpIHtcbiAgICAgICAgICAgIHJldHVybiAnbGliL3RoZW1lLmNzcyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEZvciBvdGhlciBhc3NldHMgKGltYWdlcywgZm9udHMsIGV0Yy4pLCBwcmVzZXJ2ZSB0aGVpciBvcmlnaW5hbCBuYW1lc1xuICAgICAgICAgIHJldHVybiBhc3NldEluZm8ubmFtZSB8fCAnYXNzZXQnO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNzc0NvZGVTcGxpdDogZmFsc2UsIC8vIEJ1bmRsZSBhbGwgQ1NTIGludG8gYSBzaW5nbGUgZmlsZVxuICB9LFxuICB0ZXN0OiB7XG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICBpbmNsdWRlOiBbJ3NyYy8qKi8qLnt0ZXN0LHNwZWN9LntqcyxtanMsY2pzLHRzLG10cyxjdHMsanN4LHRzeH0nXSxcblxuICAgIHJlcG9ydGVyczogWydkZWZhdWx0J10sXG4gICAgY292ZXJhZ2U6IHtcbiAgICAgIHJlcG9ydHNEaXJlY3Rvcnk6ICcuLi8uLi9jb3ZlcmFnZS9wYWNrYWdlcy9jc3MtbW9kdWxlcy10aGVtZScsXG4gICAgICBwcm92aWRlcjogJ3Y4JyxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLFlBQVksVUFBVTtBQUN0QixTQUFTLHFCQUFxQjtBQUo5QixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxjQUFjO0FBQUEsSUFDZCxJQUFJO0FBQUEsTUFDRixXQUFXO0FBQUEsTUFDWCxjQUFtQixVQUFLLGtDQUFXLG1CQUFtQjtBQUFBLElBQ3hELENBQUM7QUFBQSxFQUNIO0FBQUE7QUFBQTtBQUFBLEVBR0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1Isc0JBQXNCO0FBQUEsSUFDdEIsaUJBQWlCO0FBQUEsTUFDZix5QkFBeUI7QUFBQSxJQUMzQjtBQUFBLElBQ0EsS0FBSztBQUFBO0FBQUEsTUFFSCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUE7QUFBQTtBQUFBLE1BR1YsU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLElBQ3ZCO0FBQUEsSUFFQSxlQUFlO0FBQUE7QUFBQSxNQUViLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU1OLGdCQUFnQixDQUFDLGNBQWM7QUFHN0IsY0FBSSxVQUFVLFFBQVEsVUFBVSxLQUFLLFNBQVMsTUFBTSxHQUFHO0FBQ3JELG1CQUFPO0FBQUEsVUFDVDtBQUVBLGlCQUFPLFVBQVUsUUFBUTtBQUFBLFFBQzNCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWM7QUFBQTtBQUFBLEVBQ2hCO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixTQUFTLENBQUMsc0RBQXNEO0FBQUEsSUFFaEUsV0FBVyxDQUFDLFNBQVM7QUFBQSxJQUNyQixVQUFVO0FBQUEsTUFDUixrQkFBa0I7QUFBQSxNQUNsQixVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
