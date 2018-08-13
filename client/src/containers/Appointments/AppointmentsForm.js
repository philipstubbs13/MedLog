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
import { InputLabel } from 'material-ui/Input';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';

// Style for add appointments form.
const styles = {
  textField: {
    marginTop: 60,
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
    borderColor: '#33658A',
    maxWidth: '85%',
  },
  formControl: {
    minWidth: 120,
    marginTop: 30,
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#33658A',
    color: 'white',
  },
  formError: {
    color: 'red',
  },
  formSuccess: {
    color: 'green',
    marginTop: 10,
  }
};

class AppointmentsForm extends React.Component {
  handleDoctorMenuOption = event => {
    this.setState({ [event.target.name]: event.target.value });
    event.preventDefault();
    this.props.handleAppointmentDoctorChange(event);
  }

  state = {
    value: '',
  }

  render() {
    const { classes, doctors, clinics } = this.props;

    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
            Add an appointment
            </Typography>
            <form noValidate autoComplete="off" id="appointment-form">
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="appointment-name">
                  <span>
                    Appointment name
                    <Tooltip  
                      title="Specify a name for the appointment to help identify the appointment later."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField
                  id="appointment-name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  className={classes.textField}
                  value={this.props.appointmentName}
                  onChange={this.props.handleAppointmentNameChange}
                />
                <Typography className={classes.formError} component="p">{this.props.appointmentNameError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="select-doctor">
                  <span>
                    Select a doctor
                    <Tooltip  
                      title="Select the doctor associated with the scheduled appointment."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField 
                  id='doctor'
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
                      return <MenuItem key={doctor._id} value={doctor.lastname}>Dr. {doctor.lastname}</MenuItem>;
                    })}
                  </TextField>
                  <Typography className={classes.formError} component="p">{this.props.appointmentDoctorError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="appointment-date">
                  <span>
                    Appointment date
                    <Tooltip  
                      title="Use the date picker to specify the date of the appointment."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField
                  id="appointment-date"
                  type="date"
                  defaultValue="MM-DD-YYYY"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={this.props.appointmentDate}
                  onChange={this.props.handleAppointmentDateChange}
                />
                <Typography className={classes.formError} component="p">{this.props.appointmentDateError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="appointment-time">
                  <span>
                    Appointment time (HH:MM AM/PM)
                    <Tooltip  
                      title="Use the time picker to specify the time of the appointment."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField
                  id="appointment-time"
                  type="time"
                  defaultValue=""
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={this.props.appointmentTime}
                  onChange={this.props.handleAppointmentTimeChange}
                />
                <Typography className={classes.formError} component="p">{this.props.appointmentTimeError}</Typography>
              </FormControl>

              <Button 
                size="large" 
                className={classes.button} 
                onClick={this.props.handleFormSubmit}
                color="primary" 
                variant="raised"
              >
                Add appointment
              </Button>
              <Typography className={classes.formSuccess} component="p">{this.props.formSuccessMessage}</Typography>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(AppointmentsForm);
