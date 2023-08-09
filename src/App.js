import './App.css';
import { Global } from './global-style/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { variables } from './variables/variables';
import { AppRoutes } from './routes';
import React from "react";

function App() {

  return (
    <>
    <ThemeProvider theme={variables}>
      <Global/>
      <AppRoutes/>
    </ThemeProvider>
    </>
  );
}

export default App;
