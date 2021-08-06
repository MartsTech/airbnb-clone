import SEO from "./SEO";


const Providers: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      {children}
    </>
  );
};

export default Providers;
