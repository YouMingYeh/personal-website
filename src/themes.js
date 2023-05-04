// themes.js

import { createTheme } from "@material-ui/core/styles";

const createDarkTheme = () => {
  return createTheme({
    palette: {
      primary: {
        main: "#687387",
      },
      secondary: {
    main: "#606060",
      },
      background: {
        //default: "#606060",
        default: "#BDCBD6"
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
