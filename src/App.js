// import logo from './logo.svg';
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/darktheme";
import Navbar from "./Pages/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import Auth from "./Pages/Auth/Auth";
import { useState } from "react";

function App() {
  const user = useState(false);
  return (
    <ThemeProvider theme={darkTheme}>
      {user ? (
        <div>
          <Navbar />

          <Homepage />
        </div>
      ) : (
        <Auth />
      )}

    </ThemeProvider>
  );
}

export default App;
