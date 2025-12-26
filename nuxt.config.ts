// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxtjs/i18n"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  // @see https://i18n.nuxtjs.org/docs/getting-started/usage
  i18n: {
    defaultLocale: "en",
    locales: [{ code: "en", name: "English", file: "en.json" }],
    compilation: {
      strictMessage: false,
    },
  },
  app: {
    head: {
      title: "NOBOCO",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
