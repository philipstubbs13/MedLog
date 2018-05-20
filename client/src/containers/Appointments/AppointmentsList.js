// Importing React since we are using React.
import React from 'react';
// Import UI components from material-ui-next.
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { TableCell, TableRow } from 'material-ui/Table';
// Import moment js library to format appointment date in table.
import moment from 'moment';

// Style/Theme
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    display: 'flex',
    flexWrap: 'wrap',
  }),
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  button: {
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#33658A',
    color: 'white',
  },
});

// Appointments List component on the Appointments page.
class AppointmentsList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <TableRow className={classes.row} key={this.props.id}>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>{this.props.doctor}</TableCell>
        <TableCell numeric>{moment(this.props.date).format('DD MMM YYYY')}</TableCell>
        <TableCell numeric>{this.props.time}</TableCell>
        <TableCell>
          <Button size="small" onClick={() => { this.props.deleteAppointment(this.props.id); }}>
            <i class="far fa-trash-alt" />
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

export default withStyles(styles)(AppointmentsList);
