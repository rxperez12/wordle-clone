import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./routes-nav/NavBar";
import WordleGame from "./wordle-game/WordleGame";

import "./App.css";

const TEST_WORD = "apple";

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 */

function App() {
  const [count, setCount] = useState(0);

  function incrCount() {
    setCount((count) => count + 1);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      <main>
        <WordleGame answer={"apple"} />
      </main>
    </div>
  );
}

export default App;
