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

                    <div className={classes.symptom}>
                       <Typography component="p">
                        Fatigue
                      </Typography>
                      <Typography component="p">
                        February 19, 2018 at 6:00 p.m.
                      </Typography>
                      <Typography component="p">
                        Comment about symptom
                      </Typography>
                      <Button size="small" className={classes.button}>Remove</Button>
                    </div>

                    <Divider />

                    <div className={classes.symptom}>
                      <Typography component="p">
                        Dizzy
                      </Typography>
                      <Typography component="p">
                        April 14, 2018 at 7:10 a.m.
                      </Typography>
                      <Typography component="p">
                        Comment about symptom
                      </Typography>
                      <Button size="small" className={classes.button}>Remove</Button>
                    </div>

                    <Divider />

                    <div className={classes.symptom}>
                      <Typography component="p">
                        Shortness of breath
                      </Typography>
                      <Typography component="p">
                        February 19, 2018 at 6:00 p.m.
                      </Typography>
                      <Typography component="p">
                        Comment about symptom
                      </Typography>
                      <Button size="small" className={classes.button}>Remove</Button>
                    </div>

                     <Divider />
                    </CardContent>
              </Card>
            </div>
    );
  }
}

// Exporting the SymptomList component with styling.
export default withStyles(styles)(SymptomList);
