// import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/darktheme';
import Navbar from './Pages/Navbar/Navbar';
import Homepage from './Pages/Homepage/Homepage';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      
      <Navbar/>

      <Homepage/>

    </ThemeProvider>
  );
}

export default App;
