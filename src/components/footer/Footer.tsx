import footerData from "../../data/footerLinks.json";

const Footer = () => {
  return (
    <footer
      className="grid xl:grid-cols-4 gap-y-10 px-32 py-14
      bg-gray-100 text-gray-600"
    >
      {footerData.map(({ title, links }) => (
        <div
          key={title}
          className="gap-y-4 text-sm text-gray-800
          grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-1"
        >
          <h5 className="font-bold">{title}</h5>
          {links.map((link) => (
            <p key={link}>{link}</p>
          ))}
        </div>
      ))}
    </footer>
  );
};

export default Footer;
