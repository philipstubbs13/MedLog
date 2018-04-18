// Importing React since we are using React.
import React from 'react';
// Importing UI components from material-ui-next.
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';


const styles = {
  root: {
    width: 500,
  },
  copyright: {
    marginTop: 10,
  },
};

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            HealthTracker
          </Typography>
          <Typography component="p">
            Created by Sara, Kayla, Jerridd, and Phil at the University of Minnesota
          </Typography>
          <Typography component="p" className={classes.copyright}>
            Copyright 2018
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

// Exporting the footer component with styling.
export default withStyles(styles)(Footer);
