import React from "react";
import Home from "./home";

// This wrapper provides the component for storyboards without router context
const HomeWrapper = () => {
  // We're removing the HashRouter since it's causing nesting issues
  // The router context should come from the parent application
  return <Home />;
};

export default HomeWrapper;
