import buttonsData from "data/resultsOffersButtons.json";

const ResultsOffeersButtons = () => {
  return (
    <div
      className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800
    whitespace-nowrap"
    >
      {buttonsData.map((text) => (
        <p
          key={text}
          className="px-4 py-2 border rounded-full cursor-pointer
          hover:shadow-lg active:scale-95 active:bg-gray-100
          transition transform duration-100 ease-out"
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default ResultsOffeersButtons;
