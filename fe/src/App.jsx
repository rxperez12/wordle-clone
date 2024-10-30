import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./routes-nav/NavBar";
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
  const [count, setCount] = useState(0);

  function incrCount() {
    setCount((count) => count + 1);
  }

  return (
    <main>
      <WordleGame answer={"apple"} />
    </main>
  );
}

export default App;
