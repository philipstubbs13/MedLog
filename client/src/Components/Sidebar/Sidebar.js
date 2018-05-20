// Import React
import React from 'react';
// Import material-ui-next components and styling.
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Hidden from 'material-ui/Hidden';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';

// Original drawer width: 240
const drawerWidth = 120;

const styles = {
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    backgroundColor: '#33658A',
  },
  navItem: {
    marginTop: 8,
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
            <ListItem className={classes.navItem} component={Link} to="/home">
              <ListItemText>
                <Tooltip
                  title="Home"
                  placement="top"
                >
                  <IconButton> <i className="fas fa-home" /></IconButton>
                </Tooltip>
              </ListItemText>
            </ListItem>
            <ListItem className={classes.navItem} component={Link} to="/log">
              <ListItemText>
                <Tooltip
                  title="My health log"
                  placement="top"
                >
                  <IconButton>  <i className="fas fa-notes-medical" /></IconButton>
                </Tooltip>
              </ListItemText>
            </ListItem>
            <ListItem className={classes.navItem} component={Link} to="/symptoms">
              <ListItemText>
                <Tooltip
                  title="My symptom journal"
                  placement="top"
                >
                  <IconButton><i className="fas fa-sticky-note" /></IconButton>
                </Tooltip>
              </ListItemText>
            </ListItem>
            <ListItem className={classes.navItem} component={Link} to="/appointments">
              <ListItemText>
                <Tooltip
                  title="Appointments"
                  placement="top"
                >
                  <IconButton><i className="fas fa-calendar-alt" /></IconButton>
                </Tooltip>
              </ListItemText>
            </ListItem>
            <ListItem className={classes.navItem} component={Link} to="/prescriptions">
              <ListItemText>
                <Tooltip
                  title="Prescriptions"
                  placement="top"
                >
                  <IconButton><i className="fas fa-prescription-bottle" /></IconButton>
                </Tooltip>
              </ListItemText>
            </ListItem>
            <ListItem className={classes.navItem} component={Link} to="/doctors">
              <ListItemText>
                <Tooltip
                  title="Doctors and clinics"
                  placement="top"
                >
                  <IconButton><i className="fas fa-user-md" /></IconButton>
                </Tooltip>
              </ListItemText>
            </ListItem>
            <ListItem className={classes.navItem} component={Link} to="/charts">
              <ListItemText>
                <Tooltip
                  title="Charts"
                  placement="top"
                >
                  <IconButton><i className="fas fa-chart-line" /></IconButton >
                </Tooltip>
              </ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </Hidden>
    );
  }
}

export default withStyles(styles)(Sidebar);
