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
        icon: [
          {
            "src": "src/assets/favicon/android-icon-36x36.png",
            "sizes": "36x36",
            "type": "image/png",
            "density": "0.75"
          },
          {
            "src": "src/assets/favicon/android-icon-48x48.png",
            "sizes": "48x48",
            "type": "image/png",
            "density": "1.0"
          },
          {
            "src": "src/assets/favicon/android-icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png",
            "density": "1.5"
          },
          {
            "src": "src/assets/favicon/android-icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png",
            "density": "2.0"
          },
          {
            "src": "src/assets/favicon/android-icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png",
            "density": "3.0"
          },
          {
            "src": "src/assets/favicon/android-icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "density": "4.0"
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
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
