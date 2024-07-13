const TextStats = ({ numberOfCharacters, numberOfWords }) => {
  return (
    <section className="p-2 sm:p-4   rounded-t-none rounded-b-xl sm:rounded-r-xl sm:rounded-l-none  bg-[#ffffb5] min-w-[85vw] sm:min-w-[30vw] min-h-[25vh] sm:min-h-[50vh] grid grid-cols-2 grid-rows-2 justify-center items-center text-center">
      <p className="row-span-1 col-span-1 flex flex-col gap-2">
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
          {numberOfCharacters}
        </span>
        <span className="text-lg">Characters</span>
      </p>
      <p className="row-span-1 col-span-1 flex flex-col gap-2">
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
          {numberOfWords}
        </span>
        <span className="text-lg">Words</span>
      </p>
      <p className="row-span-1 col-span-1 flex flex-col gap-2">
        <span
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold ${
            numberOfCharacters > 280 ? "text-[#f00]" : "text-black"
          }`}
        >
          {280 - numberOfCharacters}
        </span>
        <span className="text-lg font-semibold">X</span>
      </p>
      <p className="row-span-1 col-span-1 flex flex-col gap-2">
        <span
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold ${
            numberOfCharacters > 3000 ? "text-[#f00]" : "text-black"
          }`}
        >
          {3000 - numberOfCharacters}
        </span>
        <span className="text-lg">LinkedIn</span>
      </p>
    </section>
  );
};

export default TextStats;
