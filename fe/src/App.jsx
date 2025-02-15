import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import WordleGame from "./wordle-game/WordleGame";

import "./App.css";

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 * App -> {WordleGame}
 */
function App() {
  return (
    <main>
      <WordleGame />
    </main>
  );
}

export default App;
