import React from "react";
import Home from "./views/Home";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const renderLoginView = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
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

  const renderLoading = () => {};

  return isAuthenticated ? renderApp() : renderLoginView();
};

export default App;
