const BannerButton = () => {
  return (
    <div className="absolute top-1/2 w-full text-center">
      <p className="text-sm sm:text-lg font-medium">
        Not sure where to go? Perfect.
      </p>
      <button
        className="text-purple-500 bg-white px-10 py-4
        shadow-md rounded-full font-bold my-3 hover:shadow-xl
        active:scale-90 transition duration-200"
      >
        I'm flexible
      </button>
    </div>
  );
};

export default BannerButton;
