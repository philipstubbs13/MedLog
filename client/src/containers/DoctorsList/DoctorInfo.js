// Import React
import React from 'react';
// Import UI components and style from material-ui-next.
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';

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
  button: {
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#33658A',
    color: 'white',
  },
});

// Doctor info component on the Doctors and clinics page.
class DoctorInfo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <List className={classes.logItem} key={this.props.id}>
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
          <ListItem>
            <Button size="small" color="primary" variant="raised" className={classes.button} onClick={() => { this.props.deleteDoctor(this.props.id); }}>DELETE</Button>
          </ListItem>
        </List>
        <Divider className={classes.divider} />
      </div>
    );
  }
}

export default withStyles(styles)(DoctorInfo);
