import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    light: Palette["primary"];
  }

  interface PaletteOptions {
    light?: PaletteOptions["primary"];
  }
}

// Update the Button's color options to include an ochre option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    myTheme: true;
    light: true;
  }
}
export const theme = createTheme({
  palette: {
    light: {
      main: "#778da9",
    },
  },
});
