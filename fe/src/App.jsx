import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./routes-nav/NavBar";

import "./App.css";

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
        <h1>Wordle</h1>,
      </main>
    </div>
  );
}

export default App;
