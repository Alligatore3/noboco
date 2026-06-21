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
    locales: [
      { code: "en", name: "🇬🇧 English", file: "en.json" },
      { code: "ja", name: "🇯🇵 Japanese", file: "jp.json" },
    ],
    compilation: {
      strictMessage: false,
    },
    // Enable browser language detection (override defaultLocale when possible)
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // only detect on '/' (recommended for SEO)
    },
  },
  app: {
    head: {
      title: "NOBOCO",
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap",
        },
      ],
      htmlAttrs: { lang: "en", class: "dark" },
    },
  },
});
