import React from "react";
import Home from "./views/Home";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingView from "./views/LoadingView";

const App = () => {
  const { isLoading, user } = useAuth0();

  console.log(user);

  if (isLoading) return <LoadingView />;
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
