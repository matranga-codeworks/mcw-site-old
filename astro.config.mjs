// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: "https://matrangacodeworks.com",

  prefetch: {
    prefetchAll: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap(), compressor()],

  redirects: {
    "/slides": {
      status: 301,
      destination: "https://docs.google.com/presentation/d/1wHxpv7rBue7LJlMmGvgA9DPk0yZ9bcnpZt0IMxJ9MLQ/present"
    }
  }
});
