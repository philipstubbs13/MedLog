// Importing React since we are using React.
import React from 'react';
// Import UI components from material-ui-next.
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { TableCell, TableRow } from 'material-ui/Table';

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
});

// Appointments List component on the Appointments page.
class AppointmentsList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <TableRow className={classes.row} key={this.props._id}>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>{this.props.doctor}</TableCell>
        <TableCell numeric>{this.props.date}</TableCell>
        <TableCell numeric>{this.props.time}</TableCell>
        <TableCell>{this.props.clinic}</TableCell>
        {/* <TableCell>Remove</TableCell> */}
      </TableRow>
    );
  }
}

export default withStyles(styles)(AppointmentsList);
