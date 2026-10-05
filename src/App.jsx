import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Workers from "./pages/Workers";
import Health from "./pages/Health";
import Environment from "./pages/Environment";
import LiveLocation from "./pages/LiveLocation";
import Alerts from "./pages/Alerts";
import Reports from "./pages/Reports";
import History from "./pages/History";
import Settings from "./pages/Settings";

export default function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/workers"
          element={<Workers />}
        />

        <Route
          path="/health"
          element={<Health />}
        />

        <Route
          path="/environment"
          element={<Environment />}
        />

        <Route
          path="/location"
          element={<LiveLocation />}
        />

        <Route
          path="/alerts"
          element={<Alerts />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="/history"
          element={<History />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

      </Routes>

    </BrowserRouter>
  );
}