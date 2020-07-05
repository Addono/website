module.exports = {
  siteMetadata: {
    title: "Adriaan Knapen",
    description: "Personal website of Adriaan Knapen",
    locale: "en",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        theme: "classic",
        showThemeLogo: false,
      },
    },
  ],
}
