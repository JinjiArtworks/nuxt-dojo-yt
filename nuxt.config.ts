// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"], // set it manual
  // Setting up a head. Mostly this is for SEO optimization
  app: {
    head: {
      title: "Nuxt Dojo",
      meta: [{ name: "description", content: "Everything About Nuxt3!" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
  // Set this up after define custom api end point in .env
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  }
});
