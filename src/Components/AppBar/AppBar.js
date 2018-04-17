// Importing React since we are using React.
import React from 'react';
// Importing AppBar
// The app bar, formerly known as the action bar in Android,
// is a special kind of toolbar that’s used for branding, navigation, search, and actions.
import AppBar from 'material-ui/AppBar';
// Importing material-ui grid layout.
import Grid from 'material-ui/Grid';
import createBreakpoints from 'material-ui/styles/createBreakpoints';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Container } from 'rebass';

// Top navigation bar component
const NavBar = () => (
  <div>
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <Typography variant="title" color="inherit">
            HealthTracker
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  </div>
);

export default NavBar;
