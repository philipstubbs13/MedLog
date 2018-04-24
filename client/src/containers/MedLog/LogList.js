// Import React
import React from 'react';
// Import UI components and style from material-ui-next.
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

// Style/Theme
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

// Log List component on the My health log page.
class LogList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          <Typography component="p">
            <div className={classes.symptom} key={this.props._id}>
              <Typography component="p">
                Date: {this.props.date}
              </Typography>
              <Typography component="p">
                Doctor: {this.props.doctor}
              </Typography>
              <Typography component="p">
                Clinic: {this.props.clinic}
              </Typography>
              <Typography component="p">
                Reason for visit: {this.props.visitPurpose}
              </Typography>
              <Typography component="p">
                Height: {this.props.heightIn}
              </Typography>
              <Typography component="p">
                Weight: {this.props.weightLb}
              </Typography>
            </div>
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(LogList);
