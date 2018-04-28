// Import React
import React from 'react';
// Import UI components and style from material-ui-next.
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

// Style/Theme
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    display: 'flex',
    flexWrap: 'wrap',
  }),
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    marginLeft: 20,
  },
  logItem: {
    marginTop: 20,
  },
  divider: {
    backgroundColor: '#f44e03',
    height: 6,
  },
});

// Doctor info component on the Doctors and clinics page.
class DoctorInfo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <List className={classes.logItem}>
          <ListItem>
            <ListItemText >
              <b>Doctor:</b> {this.props.doctorFirstName} {this.props.doctorLastName}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText >
              <b>Clinic:</b> {this.props.doctorClinic}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText >
              <b>Phone:</b> {this.props.doctorPhone}
            </ListItemText>
          </ListItem>
        </List>
        <Divider className={classes.divider}/>
      </div>
    );
  }
}

export default withStyles(styles)(DoctorInfo);
