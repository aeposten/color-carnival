import { useState, useEffect } from "react";
import ColorList from "./components/ColorList";

function App() {
  const NUMCOLORS = 6;
  let winningIndex;
  const [gameColors, setGameColors] = useState([]);
  const [winningColor, setWinningColor] = useState({});

  function getRandomRGB() {
    return Math.floor(Math.random() * 256);
  }

  function getNewColor() {
    let newColor = {
      red: getRandomRGB(),
      green: getRandomRGB(),
      blue: getRandomRGB(),
      isWinner: false,
    };
    return newColor;
  }
  function getWinningIndex() {
    winningIndex = Math.floor(Math.random() * NUMCOLORS);
    return winningIndex;
  }

  // function startGame() {
  //   getWinningIndex()
  //   const newColors = [];
  //   let winner;

  //   for (let i = 0; i < NUMCOLORS; i++) {
  //     newColors.push(getNewColor());
  //     if (i === winningIndex) {
  //       winner = newColors[winningIndex];
  //       newColors[winningIndex].isWinner = true
  //     }
  //   }
  //  setGameColors([...gameColors, ...newColors]);
  //   setWinningColor({...winningColor, ...winner})
  // }

  // function resetGame() {
  //   window.location.reload(false);
  // }

  useEffect(() => {
    function startGame() {
      getWinningIndex();
      const newColors = [];
      let winner;

      for (let i = 0; i < NUMCOLORS; i++) {
        newColors.push(getNewColor());
        if (i === winningIndex) {
          winner = newColors[winningIndex];
          newColors[winningIndex].isWinner = true;
        }
      }
      setGameColors([...gameColors, ...newColors]);
      setWinningColor({ ...winningColor, ...winner });
    }
    startGame();
  }, []);

  return (
    <div className="App">
      <ColorList
        gameColors={gameColors}
        winningColor={winningColor}
        resetGame={resetGame}
      />
    </div>
  );
}

export default App;
