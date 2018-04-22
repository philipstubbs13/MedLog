// Import React
import React from 'react';
// Import UI components and style from material-ui-next.
import PropTypes from 'prop-types';
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

// Symptom List component on the My symptom journal page.
class SymptomList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          <Typography component="p">
            <div className={classes.symptom} key={this.props._id}>
              <Typography component="p">
                Symptom: {this.props.type}
              </Typography>
              <Typography component="p">
                Date: {this.props.date}
              </Typography>
              <Typography component="p">
                Time: {this.props.time}
              </Typography>
              <Typography component="p">
                More info: {this.props.info}
              </Typography>
              <Button size="small" className={classes.button}>Remove</Button>
            </div>
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(SymptomList);
