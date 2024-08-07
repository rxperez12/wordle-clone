import { Routes, Route, Navigate } from "react-router-dom";
import WordleGame from "../wordle-game/WordleGame";

/** AppComponent for summary
 *
 * Props:
 * -
 *
 * State:
 * -
 *
 * App -> RoutesList -> Wordle
 */
function RoutesList() {
  return (
    <div className="pt-5">
      <Routes>
        <Route
          path="/"
          element={<WordleGame />}
        />
      </Routes>
    </div>
  );
}

export default RoutesList;
