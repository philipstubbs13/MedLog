// Importing React since we are using React.
import React from 'react';
// Importing material-ui components and style.
import TextField from 'material-ui/TextField';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';

// Style
const styles = theme => ({
  textField: {
    marginTop: 40,
  },
  // Tell Material-UI what's the font-size on the html element is.
  typography: {
    htmlFontSize: 40,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing.unit * 3,
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#007AC1',
  },
  formControl: {
    minWidth: 120,
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#007AC1',
    color: 'white',
  },
});

class SymptomTextFields extends React.Component {
  handleSymptomSelectChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    event.preventDefault();
    console.log(event.target.value);
    this.props.handleSymptomTypeChange(event);
  }

  state = {
    value: '',
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
            Add a symptom
            </Typography>
            <form noValidate autoComplete="off">
              <FormControl className={classes.formControl} fullWidth>
                <TextField 
                  id='select-sympptom'
                  select
                  label='Select symptom'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.textField} 
                  value={this.state.value}
                  onChange={this.handleSymptomSelectChange}
                  SelectProps={{ name: 'value'}} 
                  margin="normal">
                    <MenuItem value=""></MenuItem>
                    <MenuItem value="Dizzy">Dizzy</MenuItem>
                    <MenuItem value="Shortness of breath">Shortness of breath</MenuItem>
                    <MenuItem value="Fainted">Fainted</MenuItem>
                    <MenuItem value="Swelling">Swelling</MenuItem>
                    <MenuItem value="Heart Fluttering">Heart Fluttering</MenuItem>
                    <MenuItem value="Fatigue">Fatigue</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                </TextField>
              </FormControl>

              <TextField
                id="symptom-day"
                label="Day symptom occurred"
                type="date"
                defaultValue="DD-MM-YYYY"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                value={this.props.date}
                onChange={this.props.handleSymptomDayChange}
              />

              <TextField
                id="symptom-time"
                label="Time symptom occurred"
                type="timedatetime-local"
                defaultValue="10:30"
                className={classes.textField}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                value={this.props.time}
                onChange={this.props.handleSymptomTimeChange}
              />

              <TextField
                id="additional-symptom-info"
                label="Additional information you want to share with your doctor"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder=""
                helperText=""
                fullWidth
                className={classes.textField}
                multiline="true"
                rows={3}
                rowsMax={4}
                value={this.props.info}
                onChange={this.props.handleSymptomInfoChange}
              />

              <Button size="large" className={classes.button} onClick={this.props.handleFormSubmit}>
              Add symptom
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

// TextFields.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(SymptomTextFields);
