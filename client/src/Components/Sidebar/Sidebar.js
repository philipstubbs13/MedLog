import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';

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
          <ListItem button >
            <a href="/home">
              <ListItemText primary="Home" />
            </a>
          </ListItem>
          <ListItem button>
            <a href="/log">
              <ListItemText primary="My health log" />
            </a>
          </ListItem>
          <ListItem button>
            <a href="/symptoms">
              <ListItemText primary="My symptom journal" />
            </a>
          </ListItem>
          <ListItem button>
            <a href="/appointments">
              <ListItemText primary="Appointments" />
            </a>
          </ListItem>
          <ListItem button>
            <a href="/prescriptions">
              <ListItemText primary="Prescriptions" />
            </a>
          </ListItem>
          <ListItem button>
            <a href="/doctors">
              <ListItemText primary="Doctors and clinics" />
            </a>
          </ListItem>
          <ListItem button>
            <a href="/search">
              <ListItemText primary="Search" />
            </a>
          </ListItem>
          <ListItem button>
            <a href="/attachments">
              <ListItemText primary="Attachments" />
            </a>
          </ListItem>
          <ListItem button>
            <a href="/charts">
              <ListItemText primary="Charts" />
            </a>
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar);
