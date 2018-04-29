// Importing React since we are using React.
import React from 'react';
// Importing AppBar
// The app bar, formerly known as the action bar in Android,
// is a special kind of toolbar that’s used for branding, navigation, search, and actions.
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
// Importing material-ui-next styling.
import { withStyles } from 'material-ui/styles';
// Importing HamburgerMenu component.
import HamburgerMenu from './HamburgerMenu';

// material-ui-next styling
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    backgroundColor: 'white',
  },
  button: {
    color: 'white',
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <HamburgerMenu className={classes.menuButton} aria-label="Menu" />
          <Typography variant="title" color="inherit" className={classes.flex}>
            HealthTracker
          </Typography>
          <Button className={classes.button}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// Exporting the NavBar component with styling.
export default withStyles(styles)(NavBar);
