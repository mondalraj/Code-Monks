module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "monkey",
  },
  plugins: [{
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `Roboto`,
        `Gemunu Libre`,
        `source sans \pro:300,400,400i,700` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  }],
};
