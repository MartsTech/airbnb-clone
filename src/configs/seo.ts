export const baseUrl = "https://airbnb-clone-martstech.vercel.app";

export const defaultSEO = {
  title: "Airbnb Clone",
  description: "Airbnb Clone created with Next.JS and TailwindCSS",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    site_name: "Airbnb Clone",
    images: [
      {
        url: `${baseUrl}/static/favicon.ico`,
        alt: "Airbnb Clone",
      },
    ],
  },
};

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const extendSEO = (options: SEOProps) => {
  const images = options.image
    ? [{ url: `${baseUrl}/static/${options.image}` }]
    : defaultSEO.openGraph.images;

  return {
    ...defaultSEO,
    ...options,
    url: `${baseUrl}/${options.url}`,
    openGraph: {
      ...defaultSEO.openGraph,
      images,
      url: `${baseUrl}/${options.url}`,
    },
  };
};
