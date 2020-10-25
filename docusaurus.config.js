module.exports = {
  title: "React Componenets DnD",
  tagline: "شرح لكيفية دعم التحريك لعناصر React",
  url: "https://qalamar.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "qalamar", // Usually your GitHub org/user name.
  projectName: "react-dnd", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "React Componenets DnD",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },

        {
          href: "https://github.com/qalamar/react-dnd",
          label: "Source Code",
          position: "right",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
