import React, { useState } from "react";

const Content = () => {
  const [textAreaText, setTextAreaText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleShowTextClick = (e) => {
    e.preventDefault();
    setOutputText(textAreaText);
  };
  console.log(textAreaText);
  const handleTextAreaChange = (event) => {
    setTextAreaText(event.target.value);
  };

  return (
    <div className="content">
      <form action="" onSubmit={handleShowTextClick}>
        <textarea
          value={textAreaText}
          onChange={handleTextAreaChange}
          placeholder="Enter your text here"
          required
        ></textarea>
        <button>Show text</button>
      </form>

      <p className="output">
        {textAreaText ? outputText : "Your text will show here"}
      </p>
    </div>
  );
};

export default Content;
