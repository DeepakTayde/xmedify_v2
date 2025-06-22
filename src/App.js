import { CssBaseline } from '@mui/material';
import React from 'react'
import { Outlet } from 'react-router-dom';
import DownloadApp from './components/Sections/DownloadApp/DownloadApp';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <React.Fragment >
      <CssBaseline/>
      <Outlet/>
      <DownloadApp/>
      <Footer/>
    </React.Fragment>

  );
}

export default App;
