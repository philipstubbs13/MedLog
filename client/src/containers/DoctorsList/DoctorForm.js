// Importing React since we are using React.
import React, { Component } from 'react';
// Importing UI components from material-ui-next
import Typography from 'material-ui/Typography';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';


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

class DoctorForm extends Component {
  handleClinicMenuOption = event => {
    this.setState({ [event.target.name]: event.target.value });
    event.preventDefault();
    console.log(event.target.value);
    this.props.handleDoctorClinicChange(event);
    //need to make the selected item the first thing that shows on the list
  }

  state = {
    value: '',
  }

  render() {
    const { classes, clinics } = this.props;
    
    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Add a doctor
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
                id="first-name"
                label="First name"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder=""
                helperText=""
                fullWidth
                margin="normal"
                className={classes.textField}
                value={this.props.doctorFirstName}
                onChange={this.props.handleDoctorFirstNameChange}
              />

              <TextField
                id="last-name"
                label="Last name"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder=""
                helperText=""
                fullWidth
                margin="normal"
                className={classes.textField}
                value={this.props.doctorLastName}
                onChange={this.props.handleDoctorLastNameChange}
              />

              <FormControl className={classes.formControl} fullWidth>
              <TextField 
                id='clinic'
                select
                label='Select a clinic'
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.textField} 
                value={this.state.value}
                onChange={this.handleClinicMenuOption} 
                SelectProps={{ name: 'value'}} 
                margin="normal">
                  {clinics.map(clinic => {
                    return <MenuItem value={clinic.clinicname} sid={clinic._id}>{clinic.clinicname}</MenuItem>;
                  })}
                </TextField>
              </FormControl>

              <TextField
                id="doctor-phone"
                label="Phone number"
                InputLabelProps={{
                    shrink: true,
                }}
                className={classes.textField}
                fullWidth
                value={this.props.doctorPhone}
                onChange={this.props.handleDoctorPhoneChange}
              />

              <Button size="large" className={classes.button} onClick={this.props.handleDoctorFormSubmit}>
                Add doctor
              </Button>
            </form>
          </CardContent>
        </Card>
      </div >
    );
  }
}

export default withStyles(styles)(DoctorForm);

