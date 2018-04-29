// Import React
import React from 'react';
// Import material-ui-next components and styling.
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const styles = {
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    backgroundColor: '#007AC1',
  },
};

class Sidebar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem button component={Link} to="/home" >
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/log">
            <ListItemText primary="My health log" />
          </ListItem>
          <ListItem button component={Link} to="/symptoms">
            <ListItemText primary="My symptom journal" />
          </ListItem>
          <ListItem button component={Link} to="/appointments">
            <ListItemText primary="Appointments" />
          </ListItem>
          <ListItem button component={Link} to="/prescriptions">
            <ListItemText primary="Prescriptions" />
          </ListItem>
          <ListItem button component={Link} to="/doctors">
            <ListItemText primary="Doctors and clinics" />
          </ListItem>
          <ListItem button component={Link} to="/search">
            <ListItemText primary="Search" />
          </ListItem>
          <ListItem button component={Link} to="/attachments">
            <ListItemText primary="Attachments" />
          </ListItem>
          <ListItem button component={Link} to="/charts">
            <ListItemText primary="Charts" />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar);
