// Importing React since we are using React.
import React from 'react';
// Importing UI components from material-ui-next
import Typography from 'material-ui/Typography';
import { InputLabel, InputAdornment } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
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

class LogForm extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Add doctor notes
            </Typography>
            <form noValidate autoComplete="off">
              {/* <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="select-doctor-dropdown">Select a doctor</InputLabel>
                <Select
                  value={this.props.logDoctor}
                  onChange={this.props.handleLogDoctorChange}
                  inputProps={{
                    doctor: '',
                    id: 'select-doctor',
                  }}
                >
                  <MenuItem value="" />
                  <MenuItem value="Pain">Dr. Pain</MenuItem>
                  <MenuItem value="Joins">Dr. Jones</MenuItem>
                  <MenuItem value="Johnson">Dr. Johnson</MenuItem>
                  <MenuItem value="Smith">Dr. Smith</MenuItem>
                  <MenuItem value="Phil">Dr. Phil</MenuItem>
                  <MenuItem value="J"></MenuItem>Dr. J</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl> */}

              <TextField
                id="select-doctor-dropdown"
                label="Select a doctor"
                type="text"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                value={this.props.logDoctor}
                onChange={this.props.handleLogDoctorChange}
              />

              <TextField
                id="doctor-visit-date"
                label="Date of doctor visit"
                type="date"
                defaultValue="MM-DD-YYYY"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                value={this.props.logDate}
                onChange={this.props.handleLogDateChange}
              />

              {/* <FormControl className={classes.formControl, classes.textField} fullWidth>
                <InputLabel htmlFor="select-clinic-dropdown">Select a clinic</InputLabel>
                <Select
                  value={this.props.logClinic}
                  onChange={this.props.handleLogClinicChange}
                  inputProps={{
                    clinic: '',
                    id: 'select-clinic',
                  }}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={"A"}>Clinic A</MenuItem>
                  <MenuItem value={"B"}>Clinic B</MenuItem>
                  <MenuItem value={"C"}>Clinic C</MenuItem>
                  <MenuItem value={"D"}>Clinic D</MenuItem>
                  <MenuItem value={"E"}>Clinic E</MenuItem>
                  <MenuItem value={"F"}>Clinic F</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
              </FormControl> */}

              <TextField
                id="select-clinic-dropdown"
                label="Select a clinic"
                type="text"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                value={this.props.logClinic}
                onChange={this.props.handleLogClinicChange}
              />

              <TextField
                id="reason-for-visit"
                label="Reason for visit"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder=""
                helperText=""
                fullWidth
                margin="normal"
                className={classes.textField}
                value={this.props.logVisitReason}
                onChange={this.props.handleLogVisitReasonChange}
              />

              <TextField
                id="height"
                label="Height (inches)"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder=""
                helperText=""
                fullWidth
                margin="normal"
                className={classes.textField}
                value={this.props.logHeight}
                onChange={this.props.handleLogHeightChange}
              />

              <TextField
                id="weight"
                label="Weight (pounds)"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder=""
                helperText=""
                fullWidth
                margin="normal"
                className={classes.textField}
                endAdornment={<InputAdornment position="end">pounds</InputAdornment>}
                value={this.props.logWeight}
                onChange={this.props.handleLogWeightChange}
              />

              <TextField
                id="log-notes"
                label="Visit notes"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder=""
                helperText=""
                fullWidth
                margin="normal"
                className={classes.textField}
                value={this.props.logNotes}
                onChange={this.props.handleLogNotesChange}
              />

              <Button size="large" variant="raised" className={classes.button} onClick={this.props.handleFormSubmit}>
                Add notes
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

export default withStyles(styles)(LogForm);
