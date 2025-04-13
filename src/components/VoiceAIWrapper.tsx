import React from "react";
import VoiceAI from "./VoiceAI";
import { useIsInsideRouter } from "./RouterContext";
import { MemoryRouter } from "react-router-dom";

// This wrapper provides the component for storyboards
const VoiceAIWrapper = () => {
  // Check if we're already inside a Router
  const isInsideRouter = useIsInsideRouter();

  // If already inside a Router, render directly
  if (isInsideRouter) {
    return <VoiceAI />;
  }

  // Otherwise, provide a MemoryRouter for isolated context
  return (
    <MemoryRouter>
      <VoiceAI />
    </MemoryRouter>
  );
};

export default VoiceAIWrapper;
