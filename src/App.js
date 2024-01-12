import './App.css';
import { Container } from '@mui/material';
import HeaderNavBar from './components/common/header';
import router from './router/routes';
import Box from '@mui/material/Box';
import {
  RouterProvider,
} from "react-router-dom";
import * as React from 'react';
function App() {
  return (
    <React.Fragment>
      <HeaderNavBar />
      <Container fixed className='App'>
        <Box sx={{ my: 2 }}>
          <RouterProvider router={router} />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
