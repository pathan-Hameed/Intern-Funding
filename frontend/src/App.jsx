import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/DashboardPage";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
