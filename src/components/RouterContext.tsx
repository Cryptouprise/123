import React, { createContext, useContext } from "react";

// Create a context to track if we're inside a Router
const RouterContext = createContext(false);

// Hook to check if we're inside a Router
export const useIsInsideRouter = () => useContext(RouterContext);

// Provider component to mark Router presence
export const RouterProvider = ({ children }: { children: React.ReactNode }) => (
  <RouterContext.Provider value={true}>{children}</RouterContext.Provider>
);
