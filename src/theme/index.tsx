import { ThemeProvider } from "@emotion/react";
import {
  ThemeOptions,
  createTheme,
  StyledEngineProvider,
  CssBaseline,
} from "@mui/material";
import { useMemo } from "react";
import { palette } from "./palette";
import { typography } from "./typography";

interface ThemeProps {
  children: React.ReactElement;
}

export function ThemeConfig({ children }: ThemeProps): React.ReactElement {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette,
      typography,
    }),
    []
  );
  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
