import { useState } from "react";
import TextArea from "./TextArea";
import TextStats from "./TextStats";

const MainContainer = () => {
  const [text, setText] = useState("");

  const numberOfCharacters = text?.length || 0;

  const numberOfWords = text.split(/\s/).filter((word) => word !== "").length;
  //this splits the string by space and filter converts & removes any empty string and length returns the number of words

  return (
    <main className="flex flex-col sm:flex-row justify-center container text-center items-center">
      <TextArea text={text} setText={setText} />
      <TextStats
        numberOfCharacters={numberOfCharacters}
        numberOfWords={numberOfWords}
      />
    </main>
  );
};

export default MainContainer;
