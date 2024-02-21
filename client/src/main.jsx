import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { SearchProvider } from "./context/searchAspirantes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchProvider>
      <Router>
        <App />
      </Router>
    </SearchProvider>
  </React.StrictMode>
);
