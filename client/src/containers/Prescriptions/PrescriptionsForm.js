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

const styles = theme => ({
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
    marginTop: theme.spacing.unit * 3,
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#33658A',
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
});

class PrescriptionsForm extends React.Component {
  handleDoctorMenuOption = event => {
    this.setState({ [event.target.name]: event.target.value });
    event.preventDefault();
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
            <form noValidate autoComplete="off" id="prescription-form">
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="prescription-name">
                  <span>
                    Name
                    <Tooltip  
                      title="Enter the name of the prescription to help identify the prescription later."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
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
                <Typography className={classes.formError} component="p">{this.props.prescriptionNameError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="prescribing-doctor">
                  <span>
                    Doctor who prescribed
                    <Tooltip  
                      title="Use the drop-down list to select the name of the prescribing doctor."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
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
                      return <MenuItem key={doctor._id} value={doctor.lastname}>Dr. {doctor.lastname}</MenuItem>;
                    })}
                  </TextField>
                  <Typography className={classes.formError} component="p">{this.props.prescriptionDoctorError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="date-prescribed">
                  <span>
                    Date prescribed
                    <Tooltip  
                      title="Use the date picker to enter the date when the prescription was prescribed."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
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
                <Typography className={classes.formError} component="p">{this.props.prescriptionDateError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="prescription-amount">
                  <span>
                    Dose amount
                    <Tooltip  
                      title="Enter the amount that was prescribed. For example, 10mLs."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
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
                <Typography className={classes.formError} component="p">{this.props.prescriptionAmountError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="prescription-directions">
                  <span>
                    Directions for use
                    <Tooltip  
                      title="Enter specific directions, warnings, or other information regarding this prescription."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
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
                <Typography className={classes.formError} component="p">{this.props.prescriptionDirectionsError}</Typography>
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
              <Typography className={classes.formSuccess} component="p">{this.props.formSuccessMessage}</Typography>
            </form>
          </CardContent>
        </Card>
    );
  }
}

export default withStyles(styles)(PrescriptionsForm);
