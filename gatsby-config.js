const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Defense Healthcare Management Systems`,
    header: {
      secondaryLinks: [
        { text: 'Contact Us', link: '/' },
        { text: 'FAQs', link: '/' },
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
          items: [{ text: 'Home', link: '/' }],
        },
        {
          items: [{ text: 'Innovation Hubs', link: '/spending' }],
        },
        {
          items: [{ text: 'For Industry', link: '/industry' }],
        },
        {
          items: [{ text: 'For Academia', link: '/academia' }],
        },
        {
          items: [{ text: 'Events', link: '/events' }],
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
