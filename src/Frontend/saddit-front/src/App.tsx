import React from "react";
import Home from "./views/Home";
import { Routes, Route } from "react-router-dom";
import LoadingView from "./views/LoadingView";
const App = () => {
  const renderApp = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    );
  };

  return renderApp();
};

export default App;
