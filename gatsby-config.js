module.exports = {
  siteMetadata: {
    title: `bo zhao`,
    name: `Bo Zhao`,
    siteUrl: `https://bozhao.me`,
    description: `bo zhao's personal website`,
    hero: {
      heading: `If you’re looking for good Front-End Developer,  you’ve come to the right place`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/Iris23845483`,
      },
      {
        name: `github`,
        url: `https://github.com/BoZhao0817`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/bobobo.z/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/bo-zhao-189ab1186/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/Mia0817`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
