export default {
  title: "Canopy Study API Docs",
  description:
    "Canopy Study v3.2.41 API documentation with instant search, offline support, keyboard shortcuts, mobile version, and more.",
  lastUpdated: true,
  markdown: {
    theme: "material-palenight",
    lineNumbers: true,
  },
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "Web app", link: "https://app.canopy.study" },
      { text: "Configs", link: "/configs" },
      { text: "Changelog", link: "/changelog" },
    ],
    sidebar: [
      {
        text: "Get Started",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "API Reference",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
    ],
    footer: {
      copyright: "Copyright © 2022 Canopy Study Pty Ltd",
    },
    socialLinks: [{ icon: "twitter", link: "https://twitter.com/canopystudy" }],
    lastUpdatedText: "Updated Date",
  },
};
