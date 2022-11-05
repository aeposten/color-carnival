import { useState } from "react";
import Color from "./Color";
import Winner from "./Winner";
function ColorList({ gameColors, winningColor, resetGame }) {
  const [winnerClicked, setWinnerClicked] = useState(false);

  function handleIsWinner(color) {
    if (color.isWinner) {
      setWinnerClicked(true);
    }
  }

  return (
    <>
      {gameColors.map((color, index) => (

          <Color
           key={index}
           index={index}
            color={color}
            winningColor={winningColor}
            handleIsWinner={handleIsWinner}
            winnerClicked={winnerClicked}
          />

      ))}
      <Winner
        winningColor={winningColor}
        winnerClicked={winnerClicked}
        resetGame={resetGame}
      />
    </>
  );
}

export default ColorList;
