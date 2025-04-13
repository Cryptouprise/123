import React from "react";
import Home from "./home";
import { HashRouter } from "react-router-dom";

// This wrapper provides the router context for the Home component when used in storyboards
const HomeWrapper = () => {
  return (
    <HashRouter>
      <Home />
    </HashRouter>
  );
};

export default HomeWrapper;
