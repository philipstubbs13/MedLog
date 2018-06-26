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
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
// Import axios
import axios from 'axios';

// material-ui-next styling
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    fontSize: 35,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
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
            <Typography variant="title" color="inherit" className={classes.flex} component={Link} to="/home">
              HealthTracker
            </Typography>
            <Button className={classes.button} onClick={() => {
              axios.post('/Auth/logout').then(data => console.log(data))
                .then((res) => {
                window.location = '/';
              });
            }}>    
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// Exporting the NavBar component with styling.
export default withStyles(styles)(NavBar);
