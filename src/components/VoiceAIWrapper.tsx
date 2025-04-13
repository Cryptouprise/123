import React from "react";
import VoiceAI from "./VoiceAI";
import { HashRouter } from "react-router-dom";

// This wrapper provides the router context for the VoiceAI component when used in storyboards
const VoiceAIWrapper = () => {
  return (
    <HashRouter>
      <VoiceAI />
    </HashRouter>
  );
};

export default VoiceAIWrapper;
