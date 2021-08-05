import Footer from "../footer/Footer";
import Header from "../header/Header";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
