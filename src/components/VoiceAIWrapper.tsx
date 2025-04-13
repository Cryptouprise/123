import React from "react";
import VoiceAI from "./VoiceAI";

// This wrapper provides the component for storyboards without router context
const VoiceAIWrapper = () => {
  // We're removing the HashRouter since it's causing nesting issues
  // The router context should come from the parent application
  return <VoiceAI />;
};

export default VoiceAIWrapper;
