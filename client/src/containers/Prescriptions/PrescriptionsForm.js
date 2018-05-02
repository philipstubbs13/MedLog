// Importing React since we are using React.
import React from 'react';
// Importing UI components from material-ui-next
import Typography from 'material-ui/Typography';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';

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
              <TextField
                id="prescription-name"
                label="Prescription name"
                type="text"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                value={this.props.prescriptionName}
                onChange={this.props.handlePrescriptionNameChange}
              />

              <FormControl className={classes.formControl} fullWidth>
              <TextField 
                id='prescribedDoctor'
                select
                label='Doctor who prescribed'
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

              <TextField
                id="date-prescribed"
                label="Date prescribed"
                type="date"
                defaultValue="MM-DD-YYYY"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                value={this.props.prescriptionDate}
                onChange={this.props.handlePrescriptionDateChange}
              />

              <TextField
                id="prescription-amount"
                label="Dose Amount"
                type="text"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
                value={this.props.prescriptionAmount}
                onChange={this.props.handlePrescriptionAmountChange}
              />

              <TextField
                id="prescription-directions"
                label="Directions for use"
                InputLabelProps={{
                    shrink: true,
                }}
                placeholder=""
                helperText=""
                fullWidth
                margin="normal"
                className={classes.textField}
                value={this.props.prescriptionDirections}
                onChange={this.props.handlePrescriptionDirectionsChange}
              />

              <Button
                size="large"
                className={classes.button}
                onClick={this.props.handleFormSubmit}
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
