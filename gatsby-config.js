module.exports = {
  siteMetadata: {
    title: 'Measured Studios',
    description: 'A platform for product managers.',
    siteUrl: 'https://www.measuredstudios.com/',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Roboto Mono'],
      },
    },
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: require('./feed'),
    },
  ],
};
