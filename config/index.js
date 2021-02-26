module.exports = {
  //-- SITE SETTINGS -----
  author: '@JovaniPink',
  siteTitle: 'Measured Studios',
  siteShortTitle: 'Measured Studios', // Used as logo text in header, footer, and splash screen
  siteDescription:
    'We create Minimum Viable Product sites and apps towards finding your idea’s market fit.',
  keywords:
    'Data, Stats, Product Manager, Product Development, Product Owner, Product Management, Product Marketing, Project Management, Scrum, Agile​',
  siteUrl: 'https://www.measuredstudios.com/',
  siteLanguage: 'en_US',
  siteImage: 'allhands.jpg',
  siteIcon: 'content/favicon.png', // Relative to gatsby-config file
  seoTitleSuffix: 'Measured Studios', // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"
  social: {
    twitter: '@MeasuredStudios',
  },

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: '#475569',
      secondary: '#1e293b',
      tertiary: '#F2F2F2',
      text: '#475569',
      subtext: '#555555',
      background: '#ffffff',
      card: '#f1f5f9',
      scrollBar: 'rgba(0, 0, 0, 0.5)',
      boxShadow: 'rgba(0, 0, 0, 0.16)',
      boxShadowHover: 'rgba(0, 0, 0, 0.32)',
    },
    darkTheme: {
      primary: '#cbd5e1',
      secondary: '#1e293b',
      tertiary: '#252525',
      text: '#cbd5e1',
      subtext: '#AAAAAA',
      background: '#0f172a',
      card: '#1e293b',
      scrollBar: 'rgba(255, 255, 255, 0.5)',
      boxShadow: 'rgba(0, 0, 0, 0.16)',
      boxShadowHover: 'rgba(0, 0, 0, 0.32)',
    },
  },
  fonts: {
    primary: 'Source Sans Pro',
  },

  //-- ARTICLES SECTION SETTINGS -----
  mediumRssFeed:
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40measuredstudios',

  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Facebook, GitHub, Instagram, LinkedIn, Twitter
  socialMedia: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/measuredstudios/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/MeasuredStudios',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/MeasuredStudios',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/measuredstudios/',
    },
    {
      name: 'JovaniPink',
      url: 'https://www.jovanipink.com/',
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: 'Articles',
        url: '/#articles',
      },
      {
        name: 'About Us',
        url: '/#about',
      },
      {
        name: 'Projects',
        url: '/#projects',
      },
    ],
    button: {
      name: 'Contact',
      url: '/#contact',
    },
  },
  footerLinks: [
    {
      name: 'Privacy',
      url: '/privacy',
    },
    // {
    //   name: 'Imprint',
    //   url: '/imprint',
    // },
  ],
};
