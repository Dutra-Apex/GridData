import Header from "./component/header";
import './App.css';
import { Grid } from '@material-ui/core';
import React from 'react';
import UserDataGrid from "./component/userDataGrid";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <br />
      <Grid item>
          <UserDataGrid />
      </Grid>
    </Grid>
  );
}

export default App;
