import React from "react";
import Home from "./home";
import { useIsInsideRouter } from "./RouterContext";
import { MemoryRouter } from "react-router-dom";

// This wrapper provides the component for storyboards
const HomeWrapper = () => {
  // Check if we're already inside a Router
  const isInsideRouter = useIsInsideRouter();

  // If already inside a Router, render directly
  if (isInsideRouter) {
    return <Home />;
  }

  // Otherwise, provide a MemoryRouter for isolated context
  return (
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
};

export default HomeWrapper;
