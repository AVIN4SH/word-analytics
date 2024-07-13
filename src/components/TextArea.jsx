const TextArea = ({ text, setText }) => {
  const handleTextChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      alert("No script tag allowed!!");
      newText = newText.replace("<script>", "");
    }
    setText(newText);
  };

  return (
    <textarea
      value={text}
      className="p-2 sm:p-4  bg-[#181818] text-white rounded-t-xl rounded-b-none sm:rounded-l-xl sm:rounded-r-none shadow-md hover:shadow-lg min-w-[85vw] sm:min-w-[30vw] min-h-[25vh]  sm:min-h-[50vh] "
      style={{ resize: "none" }}
      placeholder="Enter your text....."
      onChange={handleTextChange}
      spellCheck="false"
    ></textarea>
  );
};

export default TextArea;
