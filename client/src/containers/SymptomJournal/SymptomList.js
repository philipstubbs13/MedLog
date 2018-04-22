// Importing React since we are using React.
import React from 'react';
// Importing UI components from material-ui-next.
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';

const styles = {
  textField: {
    marginTop: 80,
  },
  // Tell Material-UI what's the font-size on the html element is.
  typography: {
    htmlFontSize: 40,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    minWidth: 120,
  },
  button: {
    marginTop: 5,
    padding: 5,
  },
  symptom: {
    marginTop: 20,
  },
};

// Symptom List component on My symptom journal page.
class SymptomList extends React.Component {
  render() {
    const { classes } = this.props;

    return (

      <div>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
            Symptoms
            </Typography>
            <Divider />
            <div className={classes.symptom} key={this.props._id}>
              <Typography component="p">
                Symptom type: {this.props.type}
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
          </CardContent>
        </Card>
      </div>
    );
  }
}

// Exporting the SymptomList component with styling.
export default withStyles(styles)(SymptomList);
