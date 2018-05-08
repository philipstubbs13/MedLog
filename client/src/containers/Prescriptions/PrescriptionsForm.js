// Importing React since we are using React.
import React from 'react';
// Importing UI components from material-ui-next
import Typography from 'material-ui/Typography';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';

const styles = theme => ({
  textField: {
    marginTop: 50,
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
    marginTop: 30,
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#007AC1',
    color: 'white',
  },
});

class PrescriptionsForm extends React.Component {
  handleDoctorMenuOption = event => {
    this.setState({ [event.target.name]: event.target.value });
    event.preventDefault();
    console.log(event.target.value);
    this.props.handlePrescriptionDoctorChange(event);
  }

  state = {
    value: '',
  }

  render() {
    const { classes, doctors } = this.props;
    console.log(doctors);

    return (
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Add a prescription
            </Typography>
            <form noValidate autoComplete="off">
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="prescription-name">Prescription name</InputLabel>
                <TextField
                  id="prescription-name"
                  type="text"
                  className={classes.textField}
                  InputLabelProps={{
                      shrink: true,
                  }}
                  value={this.props.prescriptionName}
                  onChange={this.props.handlePrescriptionNameChange}
                />
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="prescribing-doctor">Doctor who prescribed</InputLabel>
                <TextField 
                  id='prescribedDoctor'
                  select
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.textField} 
                  value={this.state.value}
                  onChange={this.handleDoctorMenuOption} 
                  SelectProps={{ name: 'value'}} 
                  margin="normal">
                    {doctors.map(doctor => {
                      return <MenuItem value={doctor.lastname}>Dr. {doctor.lastname}</MenuItem>;
                    })}
                  </TextField>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="date-prescribed">Date prescribed</InputLabel>
                <TextField
                  id="date-prescribed"
                  type="date"
                  defaultValue="MM-DD-YYYY"
                  className={classes.textField}
                  InputLabelProps={{
                      shrink: true,
                  }}
                  value={this.props.prescriptionDate}
                  onChange={this.props.handlePrescriptionDateChange}
                />
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="prescription-amount">Dose amount</InputLabel>
                <TextField
                  id="prescription-amount"
                  type="text"
                  className={classes.textField}
                  InputLabelProps={{
                      shrink: true,
                  }}
                  value={this.props.prescriptionAmount}
                  onChange={this.props.handlePrescriptionAmountChange}
                />
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="prescription-directions">Directions for use</InputLabel>
                <TextField
                  id="prescription-directions"
                  InputLabelProps={{
                      shrink: true,
                  }}
                  margin="normal"
                  className={classes.textField}
                  value={this.props.prescriptionDirections}
                  onChange={this.props.handlePrescriptionDirectionsChange}
                />
              </FormControl>

              <Button
                size="large"
                className={classes.button}
                onClick={this.props.handleFormSubmit}
                color="primary" 
                variant="raised"
              >
                Add prescription
              </Button>
            </form>
          </CardContent>
        </Card>
    );
  }
}

export default withStyles(styles)(PrescriptionsForm);
