/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Linha de Chegada",
  titleTemplate: "%s | Linha de Chegada",
  defaultTitle: "Linha de Chegada",
  description: "O portal do esporte",
  canonical: "https://linhadechegada.fcgomes.dev",
  openGraph: {
    url: "https://linhadechegada.fcgomes.dev",
    title: "nextarter-chakra",
    description: "Next.js + chakra-ui + TypeScript template",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "nextarter-chakra.sznm.dev og-image",
      },
    ],
    site_name: "Linha de Chegada",
  },
  twitter: {
    handle: "@",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
