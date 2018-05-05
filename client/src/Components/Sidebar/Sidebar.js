// Import React
import React from 'react';
// Import material-ui-next components and styling.
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Hidden from 'material-ui/Hidden';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';

// Original drawer width: 240
const drawerWidth = 220;

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
      <Hidden xsDown>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List>
            <ListItem button component={Link} to="/home" >
              <ListItemText>
                Home <i className="fas fa-home" />
              </ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/log">
              <ListItemText>
                My health log <i className="fas fa-notes-medical" />
              </ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/symptoms">
              <ListItemText>
                My symptom journal <i className="fas fa-sticky-note" />
              </ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/appointments">
              <ListItemText>
                Appointments  <i className="fas fa-calendar-alt" />
              </ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/prescriptions">
              <ListItemText>
                Prescriptions <i className="fas fa-prescription-bottle" />
              </ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/doctors">
              <ListItemText>
                Doctors and clinics <i className="fas fa-user-md" />
              </ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/attachments">
              <ListItemText>
                Attachments <i className="fas fa-file-alt" />
              </ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/charts">
              <ListItemText>
                Charts <i className="fas fa-chart-bar" />
              </ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </Hidden>
    );
  }
}

export default withStyles(styles)(Sidebar);
