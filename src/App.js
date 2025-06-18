import { CssBaseline } from '@mui/material';
import React from 'react'
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <React.Fragment >
      <CssBaseline/>
      <Outlet/>
    </React.Fragment>

  );
}

export default App;
