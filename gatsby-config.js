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
        theme: "gh-inspired", // https://github.com/wkocjan/gatsby-theme-intro#available-color-variants
        showThemeLogo: false,
      },
    },
  ],
};
