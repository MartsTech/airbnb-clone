import "../styles/globals.css";
import { AppProps } from "next/app";
import Providers from "components/Providers";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
};

export default App;
