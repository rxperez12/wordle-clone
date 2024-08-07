import { Routes, Route, Navigate } from "react-router-dom";

/** AppComponent for summary
 *
 * Props:
 * -
 *
 * State:
 * -
 *
 * call list
 */
function RoutesList() {
  return (
    <div className="pt-5">
      <Routes>
        {!currentUser && (
          <>
            <Route
              path="/login"
              element={<LoginForm login={login} />}
            />
            <Route
              path="/signup"
              element={<SignupForm signup={signup} />}
            />
          </>
        )}

        <Route
          path="/"
          element={<Homepage />}
        />

        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}
