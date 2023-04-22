// themes.js

import { createTheme } from "@material-ui/core/styles";

const createDarkTheme = () => {
  return createTheme({
    palette: {
      primary: {
        main: "#4d6160",
      },
      secondary: {
        main: "#292522",
      },
      background: {
        default: "#b9d7d9",
      },
    },
    typography: {
      fontFamily: "monospace",
    },
  });
};

const createLightTheme = () => {
  return createTheme({
    palette: {
      primary: {
        main: "#c84648",
      },
      secondary: {
        main: "#703e3b",
      },
      background: {
        default: "#fff3db",
      },
    },
    typography: {
      fontFamily: "Gill Sans",
    },
  });
};

export { createDarkTheme, createLightTheme };
