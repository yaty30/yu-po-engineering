import React, { createContext, useContext, useMemo } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

// Define the context interface
interface ViewportContextType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isSmallScreen: boolean;
}

// Create the context with default values
const ViewportContext = createContext<ViewportContextType>({
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  isSmallScreen: false,
});

// Create a provider component
export const ViewportProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme = useTheme();

  // Use media queries once at the top level
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      isMobile,
      isTablet,
      isDesktop,
      isSmallScreen,
    }),
    [isMobile, isTablet, isDesktop, isSmallScreen]
  );

  return (
    <ViewportContext.Provider value={contextValue}>
      {children}
    </ViewportContext.Provider>
  );
};

// Custom hook for consuming the context
export const useViewport = () => useContext(ViewportContext);
