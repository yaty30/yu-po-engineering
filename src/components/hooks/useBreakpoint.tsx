import { useTheme, useMediaQuery } from "@mui/material";

export function useBreakpoint() {
  const theme = useTheme();
  const breakpoints = {
    xs: useMediaQuery(theme.breakpoints.only("xs")),
    sm: useMediaQuery(theme.breakpoints.only("sm")),
    md: useMediaQuery(theme.breakpoints.only("md")),
    lg: useMediaQuery(theme.breakpoints.only("lg")),
    xl: useMediaQuery(theme.breakpoints.only("xl")),
  };

  // Find the first breakpoint that is true
  const currentBreakpoint =
    Object.entries(breakpoints).find(([_, value]) => value)?.[0] || "xs";

  return { breakpoints, currentBreakpoint };
}
