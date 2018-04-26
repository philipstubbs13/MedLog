// Import React
import React from 'react';
// Import UI components and style from material-ui-next.
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

// Style/Theme
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

// Prescription List component on the My prescriptions page.
class PrescriptionList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          <Typography component="p">
            <div className={classes.symptom} key={this.props._id}>
              <Typography component="p">
                Name: {this.props.prescriptionName}
              </Typography>
              <Typography component="p">
                Prescribing doctor: {this.props.prescriptionDoctor}
              </Typography>
              <Typography component="p">
                Date prescribed: {this.props.prescriptionDate}
              </Typography>
              <Typography component="p">
                Number of tablets: {this.props.prescriptionAmount}
              </Typography>
              <Typography component="p">
                Directions for use: {this.props.prescriptionDirections}
              </Typography>
              <Button size="small" className={classes.button}>Remove</Button>
            </div>
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(PrescriptionList);