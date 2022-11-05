import { useState } from "react";

function Color({ color, handleIsWinner, index }) {
  const [divContent, setDivContent] = useState({ content: "" });

  function handleClickStatus(e) {
    if ((!color.isWinner )) {
      setDivContent({ content: "Not me!" });
    }
  }
  return (
    <div
      id={`item-${index}`}
      value="Not me!"
      onClick={() => {
        handleIsWinner(color);
        handleClickStatus();
      }}
      style={{
        backgroundColor: `rgb(${color.red}, ${color.green},${color.blue} )`,
      }}
    >
      <h2>{divContent.content}</h2>
    </div>
  );
}

export default Color;
