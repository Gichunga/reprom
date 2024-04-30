// import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/darktheme';
import Navbar from './Pages/Navbar/Navbar';
import Homepage from './Pages/Homepage/Homepage';
import Auth from './Pages/Auth/Auth';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      
      {/* <Navbar/> */}

      {/* <Homepage/> */}

      <Auth/>
    </ThemeProvider>
  );
}

export default App;
