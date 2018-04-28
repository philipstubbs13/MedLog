import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { MenuItem } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';
// Importing UI components from rebass.
import { Container } from 'rebass';
// Importing React Router to add page routes.
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Importing the My symptom journal page component.
import SymptomJournal from '../../containers/SymptomJournal';
// Importing the DoctorList page component.
import DoctorList from '../../containers/DoctorsList';
// Importing the Appointments page component.
import Appointments from '../../containers/Appointments';
// Importing the My health log page component.
import MedLog from '../../containers/MedLog';
// Importing the Attachments page.
import Attachments from '../../containers/Attachments';
// Importing the Prescriptions page
import Prescriptions from '../../containers/Prescriptions';
// Importing the Charts page
import Charts from '../../containers/Charts';
// Importing the Login page
import Login from '../../containers/Login';
// Importing Home page component.
import Home from '../../containers/Home';

const drawerWidth = 240;

const styles = theme => ({
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
   },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    backgroundColor: '#007AC1',
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#03A9f4',
    padding: theme.spacing.unit * 3,
  },
});

class Sidebar extends React.Component {
  state = {
    anchor: 'left',
  };

  handleChange = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { anchor } = this.state;

    const drawer = (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor={anchor}
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

    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }

    return (
        <div className={classes.appFrame}>
          {before}
            <main className={classes.content}>
              <Router>
                <Container>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/symptoms" component={SymptomJournal} />
                  <Route exact path="/doctors" component={DoctorList} />
                  <Route exact path="/appointments" component={Appointments} />
                  <Route exact path="/log" component={MedLog} />
                  <Route exact path="/attachments" component={Attachments} />
                  <Route exact path="/prescriptions" component={Prescriptions} />
                  <Route exact path="/charts" component={Charts} />
                </Container>
              </Router>,
            </main>
          {after}
        </div>
    );
  }
}

export default withStyles(styles)(Sidebar);