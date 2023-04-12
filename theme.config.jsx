export default {
  logo: <span>Uwiragiye</span>,
  project: {
    link: "https://github.com/juwiragiye/uwiragiye.git",
  },
  search: {
    placeholder: "Search Post",
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "fr", text: "Francais" },
    { locale: "sw", text: "Swahili" },
  ],
  docsRepositoryBase: "https://github.com/juwiragiye/uwiragiye.git",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Uwiragiye Janvier Portifolio" />
      <meta
        property="og:description"
        content="A comprehensive repository showcasing my journey through learning various technologies. This repo includes a portfolio of projects, a blog featuring insights and reflections, and in-depth documentation of my learning experiences. Join me as I explore, grow, and share my knowledge in the world of tech!"
      />
      <link rel="stylesheet" href="./src/styles/global.css" />
      <title>Uwiragiye Janvier</title>
    </>
  ),
  footer: {
    text: (
      <span>
        <a href="https://twitter.com/janvitech" target="_blank">
          © Janvier Uwiragiye.
        </a>
      </span>
    ),
  },
  faviconGlyph: "JU",
};
