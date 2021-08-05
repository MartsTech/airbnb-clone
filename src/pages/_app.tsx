import ProgressBar from "@badrap/bar-of-progress";
import Providers from "../components/providers/Providers";
import { AppProps } from "next/app";
import Router from "next/router";
import "../styles/globals.css";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595F",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
};

export default App;
