// Importing React since we are using React.
import React from 'react';
// Importing UI components from material-ui-next
import Typography from 'material-ui/Typography';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';

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

class LogForm extends React.Component {
  handleDoctorMenuOption = event => {
    this.setState({ [event.target.name]: event.target.value });
    event.preventDefault();
    console.log(event.target.value);
    this.props.handleLogDoctorChange(event);
  }

  state = {
    value: '',
  }

  render() {
    const { classes, doctors } = this.props;

    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Add doctor notes
            </Typography>
            <form noValidate autoComplete="off" id="log-form">
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="doctor">
                  <span>
                    Select a doctor 
                    <Tooltip  
                      title="Select a doctor to associate with this note."
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
                  <Typography className={classes.formError} component="p">{this.props.logDoctorError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="doctor visit date">
                  <span>
                    Date of doctor visit 
                    <Tooltip  
                      title="Use the date picker to specify the date of the doctor visit."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField
                  id="doctor-visit-date"
                  type="date"
                  defaultValue="MM-DD-YYYY"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={this.props.logDate}
                  onChange={this.props.handleLogDateChange}
                />
                <Typography className={classes.formError} component="p">{this.props.logDateError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="reason for visit">
                  <span>
                    Reason for visit
                    <Tooltip  
                      title="Specify the reason for visiting the doctor. For example, 3 month follow up."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>  
                </InputLabel>
                <TextField
                  id="reason-for-visit"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  className={classes.textField}
                  value={this.props.logVisitReason}
                  onChange={this.props.handleLogVisitReasonChange}
                />
                <Typography className={classes.formError} component="p">{this.props.logVisitReasonError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="height">
                  <span>
                    Height (inches) 
                    <Tooltip  
                      title="Enter the height measurement taken at the doctor's office."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span></InputLabel>
                <TextField
                  id="height"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  className={classes.textField}
                  value={this.props.logHeight}
                  onChange={this.props.handleLogHeightChange}
                />
                <Typography className={classes.formError} component="p">{this.props.logHeightError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="weight">
                  <span>
                    Weight (pounds) 
                    <Tooltip  
                      title="Enter the weight measurment taken at the doctor's office."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>  
                </InputLabel>
                <TextField
                  id="weight"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  className={classes.textField}
                  value={this.props.logWeight}
                  onChange={this.props.handleLogWeightChange}
                />
                <Typography className={classes.formError} component="p">{this.props.logWeightError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="notes">
                  <span>
                    Visit notes 
                    <Tooltip  
                      title="Enter any additional information regarding your visit to the doctor."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField
                  id="log-notes"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  className={classes.textField}
                  value={this.props.logNotes}
                  onChange={this.props.handleLogNotesChange}
                />
                <Typography className={classes.formError} component="p">{this.props.logNotesError}</Typography>
              </FormControl>

              <Button 
                size="large" 
                variant="raised" 
                className={classes.button} 
                onClick={this.props.handleFormSubmit}
                color="primary"
              >
                Add notes
              </Button>
              <Typography className={classes.formSuccess} component="p">{this.props.formSuccessMessage}</Typography>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(LogForm);
