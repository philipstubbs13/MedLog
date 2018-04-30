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

// Style for add appointments form.
const styles = {
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
};

class AppointmentsForm extends React.Component {
  handleDoctorMenuOption = event => {
    event.preventDefault();
    console.log(event.target.value);
    this.props.handleAppointmentDoctorChange(event);
  }

  state = {
    value: '',
  }

  render() {
    const { classes, doctors } = this.props;
    console.log(doctors);

    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
            Add an appointment
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
                id="appointment-name"
                label="Appointment name"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder=""
                helperText=""
                fullWidth
                margin="normal"
                className={classes.textField}
                value={this.props.appointmentName}
                onChange={this.props.handleAppointmentNameChange}
              />

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel type="select-doctors-dropdown" label="Multiple Select" multiple>
                </InputLabel>
                <Select value={this.state.value} onChange={this.handleDoctorMenuOption}>
                  {doctors.map(doctor => {
                    return <option value={doctor.lastname}>{doctor.lastname}</option>;
                  })}
                </Select>
              </FormControl>

              <TextField
                id="appointment-clinic"
                label="Clinic"
                type="text"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                value={this.props.appointmentClinic}
                onChange={this.props.handleAppointmentClinicChange}
              />

              <TextField
                id="appointment-date"
                label="Appointment date"
                type="date"
                defaultValue="MM-DD-YYYY"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                value={this.props.appointmentDate}
                onChange={this.props.handleAppointmentDateChange}
              />

              <TextField
                id="appointment-time"
                label="Appointment time"
                type="time"
                defaultValue="10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                value={this.props.appointmentTime}
                onChange={this.props.handleAppointmentTimeChange}
              />

              <Button size="large" className={classes.button} onClick={this.props.handleFormSubmit}>
              Add appointment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

// AppointmentsForm.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(AppointmentsForm);
