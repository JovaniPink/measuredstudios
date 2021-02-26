const {
  author,
  siteTitle,
  siteShortTitle,
  siteDescription,
  keywords,
  siteUrl,
  siteLanguage,
  siteImage,
  siteIcon,
  social,
  colors,
} = require(`./config`);

module.exports = {
  siteMetadata: {
    author: author,
    title: siteTitle,
    description: siteDescription,
    keywords: keywords,
    siteUrl: siteUrl,
    image: siteImage,
    social: { ...social },
  },
  flags: { DEV_SSR: true },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 80,
            },
          },
          // {
          //   resolve: `gatsby-remark-responsive-iframe`,
          //   options: {
          //     wrapperStyle: `margin-bottom: 1.0725rem`,
          //   },
          // },
          // `gatsby-remark-prismjs`,
          // `gatsby-remark-copy-linked-files`,
          // `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteShortTitle,
        start_url: `/`,
        background_color: colors.lightTheme.background,
        theme_color: colors.lightTheme.primary,
        display: `minimal-ui`,
        icon: siteIcon, // This path is relative to the root of the site.
        icons: [
          {
            src: '/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
          },
          {
            src: '/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: '/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: '/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: '/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: '/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.measuredstudios.com',
        sitemap: 'https://www.measuredstudios.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-103072419-1',
        // Puts tracking script in the head instead of the body
        head: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'measuredstudios.com',
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: [`develop`],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    `gatsby-plugin-netlify`,
  ],
};
