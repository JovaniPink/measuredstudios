module.exports = {
  siteMetadata: {
    title: "Measured Studios",
    author: "Jovani Pink",
    description: "A web based product development tool to guide people through the biggest challenges with design, technology, and marketing.",
    keywords: "product development web app, product development design web app, product development, product development design, product owner, product management, project management, scrum, agile, marketing, product marketing​",
    siteUrl: "https://www.measuredstudios.com"
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Measured Studios',
        short_name: 'Measured Studios',
        description: "A web based product development tool to guide people through the biggest challenges with design, technology, and marketing.",
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // This path is relative to the root of the site.
        icon: 'src/assets/favicon/website-icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://www.measuredstudios.com',
        sitemap: 'https://www.measuredstudios.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-103072419-1",
        // Puts tracking script in the head instead of the body
        head: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "measuredstudios.com",
      },
    }
  ],
}
