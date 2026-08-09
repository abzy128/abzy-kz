import { defineConfig, sessionDrivers } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://abzal.dev",
  adapter: cloudflare({
    // Local images are pre-optimized with Sharp at build time, so no Cloudflare
    // Images binding is required at runtime.
    imageService: "compile",
  }),
  // The site has no server-side sessions. Without this the adapter injects a
  // "SESSION" KV namespace binding that CI would have to provision.
  session: { driver: sessionDrivers.null() },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
