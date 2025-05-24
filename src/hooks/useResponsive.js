import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const useResponsive = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const breakpoint = {
    xs: useMediaQuery(theme.breakpoints.only("xs")),
    sm: useMediaQuery(theme.breakpoints.only("sm")),
    md: useMediaQuery(theme.breakpoints.only("md")),
    lg: useMediaQuery(theme.breakpoints.only("lg")),
    xl: useMediaQuery(theme.breakpoints.only("xl")),
  };

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeScreen,
    breakpoint,
  };
};
