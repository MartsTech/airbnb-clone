import Footer from "components/footer/Footer";
import Header from "components/header/Header";

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
