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

const override = {
  position:"absolute",
   top:"50%",
    left:"50%",
    transform: "translate(-50%, -50%)"
};

function App() {
  const [mode, setMode] = useState(true);
  let [loading, setLoading] = useState(true);

  const theme = useMemo(() => {
    return mode ? createDarkTheme() : createLightTheme();
  }, [mode]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading ? (<div style={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}>
        <HashLoader loading={loading} cssOverride={override} size={150} />
      </div>
      ) : (
        <>
          <Header setMode={setMode} />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </>
      )}

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
