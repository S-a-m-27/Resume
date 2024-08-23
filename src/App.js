import React from 'react';
import Profile from './Components/Profile/Profile'
import Info from './Components/Info/Info';
import { Container, Grid } from '@mui/material';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <Container>
      <Grid container spacing={2}> 
        <Grid item xs={12} sm={6} md={4} lg={5}>
          {/* Content for the first Grid item */}
            <Profile/>
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={7}>
          {/* Content for the second Grid item */}
            <Info/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
