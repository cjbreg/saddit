import React from "react";
import Home from "./views/Home";
import { Routes, Route } from "react-router-dom";
import LoadingView from "./views/LoadingView";
import SubSadditView from "./views/SubSadditView";
const App = () => {
  const renderApp = () => {
    return (
      <Routes>
        <Route path="/s/:subSadditName" element={<SubSadditView />} />
        <Route path="/" element={<Home />} />
      </Routes>
    );
  };

  return renderApp();
};

export default App;
