import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import "./App.css";

function AppContent() {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  //  THIS PART HANDLES REFRESH
  useEffect(() => {
    const isReload =
      performance.navigation.type === 1 ||
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload && location.pathname !== "/") {
      navigate("/");
    }
  }, []);

  return (
    <div className={darkMode ? "dark" : "light"}>

      {/* Hide Navbar on Landing */}
      {location.pathname !== "/" && (
        <Navbar toggleTheme={() => setDarkMode(!darkMode)} />
      )}

      <Routes>
        <Route path="/" element={<Landing darkMode={darkMode} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;