function Winner({ winningColor, winnerClicked, resetGame }) {
  return (
    <>
      <div id="item-6">
        <h1>Color Carnival!</h1>
        <div id="winner-flex">
          Find This Color: rgb ({winningColor.red}, {winningColor.green},{" "}
          {winningColor.blue}) Click colored squares to guess.
          {winnerClicked ? (
            <div>
              <h2>You Won!</h2>
              <p>
                <button onClick={resetGame}>Restart Game</button>
              </p>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}

export default Winner;