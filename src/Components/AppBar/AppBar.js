// Importing React since we are using React.
import React from 'react';
// Importing AppBar
// The app bar, formerly known as the action bar in Android,
// is a special kind of toolbar that’s used for branding, navigation, search, and actions.
import AppBar from 'material-ui/AppBar';
// Importing material-ui grid layout.
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
// import { Container } from 'rebass';
// Importing HamburgerMenu component.
import HamburgerMenu from './HamburgerMenu';

// Top navigation bar component
class NavBar extends React.Component {
  render() {
    return (

      <div>
        <Grid container>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="title" color="inherit" component="h1" style={{ flex: 1, fontSize: '35px' }}>
                HealthTracker
              </Typography>
              <HamburgerMenu />
            </Toolbar>
          </AppBar>
        </Grid>
      </div>
    );
  }
}

export default (NavBar);
