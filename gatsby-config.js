const path = require('path');

module.exports = {
  siteMetadata: {
    title: `DEFENSE HEALTHCARE MANAGEMENT SYSTEMS`,
    header: {
      secondaryLinks: [
        { text: 'Secondary link', link: '/' },
        { text: 'Another secondary link', link: '/' },
      ],
      navigation: [
        // {
        //   title: 'Innovation Hubs',
        //   items: [
        //     { text: 'Navigation link', link: '/' },
        //     { text: 'Navigation link', link: '/' },
        //     { text: 'Navigation link', link: '/' },
        //   ],
        // },
        // {
        //   title: 'For Airmen',
        //   items: [
        //     { text: 'Navigation link', link: '/' },
        //     { text: 'Navigation link', link: '/' },
        //     { text: 'Navigation link', link: '/' },
        //   ],
        // },
        {
          items: [{ text: 'Innovation Hubs', link: '/' }],
        },
        {
          items: [{ text: 'For Airmen', link: '/spending' }],
        },
        {
          items: [{ text: 'For Industry', link: '/spending' }],
        },
        {
          items: [{ text: 'For Academia', link: '/spending' }],
        },
        {
          items: [{ text: 'Events', link: '/spending' }],
        },
      ],
    },
  },
  // Note: it must *not* have a trailing slash.
  pathPrefix: process.env.BASEURL || '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: path.join(__dirname, `src`, `data`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-source-usa-spending-toptier-agencies`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
