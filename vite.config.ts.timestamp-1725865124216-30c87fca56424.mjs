// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { resolve, dirname } from "node:path";
import { defineConfig, splitVendorChunkPlugin } from "file:///D:/Vue-my-project/miladev-fe/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Vue-my-project/miladev-fe/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///D:/Vue-my-project/miladev-fe/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///D:/Vue-my-project/miladev-fe/node_modules/unplugin-auto-import/dist/vite.js";
import { NaiveUiResolver } from "file:///D:/Vue-my-project/miladev-fe/node_modules/unplugin-vue-components/dist/resolvers.js";
import VueI18nPlugin from "file:///D:/Vue-my-project/miladev-fe/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import bodyParser from "file:///D:/Vue-my-project/miladev-fe/node_modules/body-parser/index.js";
import mockServer from "file:///D:/Vue-my-project/miladev-fe/node_modules/vite-plugin-mock-server/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///D:/Vue-my-project/miladev-fe/vite.config.ts";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      "@api": fileURLToPath(new URL("./src/services/api", __vite_injected_original_import_meta_url)),
      "@locales": fileURLToPath(new URL("./locales", __vite_injected_original_import_meta_url))
    }
  },
  plugins: [
    vue(),
    mockServer({
      logLevel: "info",
      mockRootDir: "server-mock",
      middlewares: [bodyParser.json()]
    }),
    Components({
      dts: "types/components.d.ts",
      resolvers: [NaiveUiResolver()]
    }),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "pinia",
        {
          "@vueuse/core": ["formatDate", "useUrlSearchParams", "useDebounceFn", "useEventBus"]
        },
        {
          "@iconify/vue": ["Icon"]
        },
        {
          "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"]
        }
      ],
      dts: "types/auto-imports.d.ts",
      dirs: ["src/composables/**", "src/stores/**", "src/services/api/**"],
      vueTemplate: true
    }),
    VueI18nPlugin({
      runtimeOnly: true,
      compositionOnly: true,
      include: resolve(dirname(fileURLToPath(__vite_injected_original_import_meta_url)), "./locales/**")
    }),
    splitVendorChunkPlugin()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxWdWUtbXktcHJvamVjdFxcXFxtaWxhZGV2LWZlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxWdWUtbXktcHJvamVjdFxcXFxtaWxhZGV2LWZlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9WdWUtbXktcHJvamVjdC9taWxhZGV2LWZlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcbmltcG9ydCB7IHJlc29sdmUsIGRpcm5hbWUgfSBmcm9tICdub2RlOnBhdGgnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIHNwbGl0VmVuZG9yQ2h1bmtQbHVnaW4gfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXHJcbmltcG9ydCB7IE5haXZlVWlSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcclxuaW1wb3J0IFZ1ZUkxOG5QbHVnaW4gZnJvbSAnQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG4vdml0ZSdcclxuXHJcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xyXG5pbXBvcnQgbW9ja1NlcnZlciBmcm9tICd2aXRlLXBsdWdpbi1tb2NrLXNlcnZlcidcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSksXHJcbiAgICAgICdAYXBpJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9zZXJ2aWNlcy9hcGknLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgICAgJ0Bsb2NhbGVzJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL2xvY2FsZXMnLCBpbXBvcnQubWV0YS51cmwpKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICBtb2NrU2VydmVyKHtcclxuICAgICAgbG9nTGV2ZWw6ICdpbmZvJyxcclxuICAgICAgbW9ja1Jvb3REaXI6ICdzZXJ2ZXItbW9jaycsXHJcbiAgICAgIG1pZGRsZXdhcmVzOiBbYm9keVBhcnNlci5qc29uKCldXHJcbiAgICB9KSxcclxuICAgIENvbXBvbmVudHMoe1xyXG4gICAgICBkdHM6ICd0eXBlcy9jb21wb25lbnRzLmQudHMnLFxyXG4gICAgICByZXNvbHZlcnM6IFtOYWl2ZVVpUmVzb2x2ZXIoKV1cclxuICAgIH0pLFxyXG4gICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgIGltcG9ydHM6IFtcclxuICAgICAgICAndnVlJyxcclxuICAgICAgICAndnVlLXJvdXRlcicsXHJcbiAgICAgICAgJ3BpbmlhJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAnQHZ1ZXVzZS9jb3JlJzogWydmb3JtYXREYXRlJywgJ3VzZVVybFNlYXJjaFBhcmFtcycsICd1c2VEZWJvdW5jZUZuJywgJ3VzZUV2ZW50QnVzJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICdAaWNvbmlmeS92dWUnOiBbJ0ljb24nXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJ25haXZlLXVpJzogWyd1c2VEaWFsb2cnLCAndXNlTWVzc2FnZScsICd1c2VOb3RpZmljYXRpb24nLCAndXNlTG9hZGluZ0JhciddXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBkdHM6ICd0eXBlcy9hdXRvLWltcG9ydHMuZC50cycsXHJcbiAgICAgIGRpcnM6IFsnc3JjL2NvbXBvc2FibGVzLyoqJywgJ3NyYy9zdG9yZXMvKionLCAnc3JjL3NlcnZpY2VzL2FwaS8qKiddLFxyXG4gICAgICB2dWVUZW1wbGF0ZTogdHJ1ZVxyXG4gICAgfSksXHJcbiAgICBWdWVJMThuUGx1Z2luKHtcclxuICAgICAgcnVudGltZU9ubHk6IHRydWUsXHJcbiAgICAgIGNvbXBvc2l0aW9uT25seTogdHJ1ZSxcclxuICAgICAgaW5jbHVkZTogcmVzb2x2ZShkaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksICcuL2xvY2FsZXMvKionKVxyXG4gICAgfSksXHJcbiAgICBzcGxpdFZlbmRvckNodW5rUGx1Z2luKClcclxuICBdXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFEsU0FBUyxlQUFlLFdBQVc7QUFDL1MsU0FBUyxTQUFTLGVBQWU7QUFFakMsU0FBUyxjQUFjLDhCQUE4QjtBQUNyRCxPQUFPLFNBQVM7QUFFaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyx1QkFBdUI7QUFDaEMsT0FBTyxtQkFBbUI7QUFFMUIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFaOEksSUFBTSwyQ0FBMkM7QUFldE4sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxNQUNwRCxRQUFRLGNBQWMsSUFBSSxJQUFJLHNCQUFzQix3Q0FBZSxDQUFDO0FBQUEsTUFDcEUsWUFBWSxjQUFjLElBQUksSUFBSSxhQUFhLHdDQUFlLENBQUM7QUFBQSxJQUNqRTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFdBQVc7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLGFBQWEsQ0FBQyxXQUFXLEtBQUssQ0FBQztBQUFBLElBQ2pDLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULEtBQUs7QUFBQSxNQUNMLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztBQUFBLElBQy9CLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsVUFDRSxnQkFBZ0IsQ0FBQyxjQUFjLHNCQUFzQixpQkFBaUIsYUFBYTtBQUFBLFFBQ3JGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsZ0JBQWdCLENBQUMsTUFBTTtBQUFBLFFBQ3pCO0FBQUEsUUFDQTtBQUFBLFVBQ0UsWUFBWSxDQUFDLGFBQWEsY0FBYyxtQkFBbUIsZUFBZTtBQUFBLFFBQzVFO0FBQUEsTUFDRjtBQUFBLE1BQ0EsS0FBSztBQUFBLE1BQ0wsTUFBTSxDQUFDLHNCQUFzQixpQkFBaUIscUJBQXFCO0FBQUEsTUFDbkUsYUFBYTtBQUFBLElBQ2YsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLE1BQ1osYUFBYTtBQUFBLE1BQ2IsaUJBQWlCO0FBQUEsTUFDakIsU0FBUyxRQUFRLFFBQVEsY0FBYyx3Q0FBZSxDQUFDLEdBQUcsY0FBYztBQUFBLElBQzFFLENBQUM7QUFBQSxJQUNELHVCQUF1QjtBQUFBLEVBQ3pCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
