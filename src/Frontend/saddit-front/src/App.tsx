import React from "react";
import Home from "./views/Home";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginView from "./views/LoginView";

const App = () => {
  const { isAuthenticated } = useAuth0();

  const renderLoginView = () => {
    return (
      <Routes>
        <Route path="/" element={<LoginView />} />
      </Routes>
    );
  };

  const renderApp = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    );
  };

  return isAuthenticated ? renderApp() : renderLoginView();
};

export default App;
