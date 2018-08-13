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
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#33658A',
  }),
  button: {
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#33658A',
    color: 'white',
  },
});

// Symptom List component on the My symptom journal page.
class SymptomList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={4} id={this.props.id} key={this.props.id}>
        <Typography component="p">
          <b>Symptom:</b> {this.props.type}
        </Typography>
        <Typography component="p">
          <b>Date:</b> {this.props.date}
        </Typography>
        <Typography component="p">
          <b>Time:</b> {this.props.time}
        </Typography>
        <Typography component="p">
          <b>More info:</b> {this.props.info}
        </Typography>
        <Button size="small" color="primary" variant="raised" className={classes.button} onClick={() => { this.props.deleteSymptom(this.props.id); }}>Remove</Button>
      </Paper>
    );
  }
}

// Export SymptomList component with styling.
export default withStyles(styles)(SymptomList);
