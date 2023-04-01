import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { useState, useMemo } from 'react'
import { createTheme } from '@material-ui/core/styles';



function App() {
  const [mode, setMode] = useState(true);

  const theme = useMemo(()=>{
    if(mode){
      return createTheme({
        palette: {
          primary: {
            main: "#4d6160",
          },
          secondary: {
            main: "#292522",
          },
          background: {
            default: '#b9d7d9',
          },
        },
        typography: {
          fontFamily: 'BlinkMacSystemFont',
        }
      });
    }
    else {
      return createTheme({
        palette: {
          primary: {
            main: "#c84648",
          },
          secondary: {
            main: "#703e3b",
          },
          background: {
            default: '#fff3db',
          },
        },
        typography: {
          fontFamily: 'BlinkMacSystemFont',
        }
      });
    }
  },[mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header setMode={setMode}/>
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </ThemeProvider>
  );
}

export default App;

