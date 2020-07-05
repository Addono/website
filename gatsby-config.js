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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adriaan Knapen's website`,
        short_name: `aknapen.nl`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `content/images/icon.png`,
      },
    },
  ],
};
