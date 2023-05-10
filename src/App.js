import { useState, useMemo, useEffect } from "react";
import { createTheme } from "@material-ui/core/styles";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { createDarkTheme, createLightTheme } from "./themes";
import { HashLoader } from "react-spinners";
import { Button, Dialog } from "@mui/material";

const override = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function App() {
  const [mode, setMode] = useState(true);
  const [open, setOpen] = useState(true);

  const theme = useMemo(() => {
    return mode ? createDarkTheme() : createLightTheme();
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <Header setMode={setMode} />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <div
          style={{
            padding: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            My Portfolio 2.0 is done!
          </span>

          <Button
            variant="outlined"
            onClick={() => window.open("https://yehyouming.vercel.app/")}
            sx={{ fontWeight: "bold", color: "black", borderColor: "black" }}
          >
            CHECK IT OUT
          </Button>
        </div>
      </Dialog>

      <div
        id="watermark"
        style={{
          position: "fixed",
          right: "10px",
          bottom: "10px",
          fontSize: "12px",
          fontStyle: "italic",
          color: "#aaa",
        }}
      >
        Copyright &copy; 2023 You Ming-Yeh
      </div>
      <style>
        {`
          body {
            overflow-x: hidden;
          }
        `}
      </style>
    </ThemeProvider>
  );
}

export default App;
