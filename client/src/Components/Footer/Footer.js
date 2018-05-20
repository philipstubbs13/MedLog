// Importing React since we are using React.
import React from 'react';
// Importing UI components from material-ui-next.
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import axios from 'axios';


const styles = {
  root: {
    width: 500,
  },
  copyright: {
    marginTop: 10,
    backgroundColor: '#33658A',
    color: 'white',
  },
  footer: {
    backgroundColor: '#33658A',
    color: 'white',
  },
  button: {
    color: 'white',
    float: 'right',
    marginBottom: 60,
  },
};

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.footer}>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2" className={classes.footer}>
            HealthTracker
          </Typography>
          <Typography component="p" className={classes.footer}>
            Created by Sara, Kayla, Jerridd, and Phil at the University of Minnesota
          </Typography>
          <Typography component="p" className={classes.copyright}>
            Copyright &copy; 2018
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

// Exporting the footer component with styling.
export default withStyles(styles)(Footer);
