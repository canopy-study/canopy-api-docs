export default {
  base: "canopy-api-docs",
  title: "Canopy Study API Docs",
  description: "Canopy Study API documentation.",
  lastUpdated: true,
  markdown: {
    theme: "material-palenight",
  },
  themeConfig: {
    siteTitle: false,
    // logo: "/assets/logo.svg",
    nav: [{ text: "app.canopy.study", link: "https://app.canopy.study" }],
    sidebar: [
      // {
      //   text: "API Reference",
      //   items: [{ text: "All The Things", link: "/all-the-things" }],
      // },
    ],
    footer: {
      copyright: "Copyright © 2022 Canopy Study Pty Ltd",
    },
    socialLinks: [
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/company/canopystudy/",
      },
      { icon: "twitter", link: "https://twitter.com/canopystudy" },
      { icon: "instagram", link: "https://www.instagram.com/canopystudy/" },
    ],
    lastUpdatedText: "Updated Date",
  },
};
