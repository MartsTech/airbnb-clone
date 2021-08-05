import { defaultSEO } from "../../configs/seo";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

const SEO = () => {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <Head>
        <meta name="theme-color" content={"#fefefe"} />
        <link rel="apple-touch-icon" href="/static/favicon.ico" />
        <link rel="mask-icon" href="/static/favicon.ico" color={"#050505"} />
        <link rel="manifest" href="/static/meta/manifest.json" />
      </Head>
    </>
  );
};

export default SEO;
