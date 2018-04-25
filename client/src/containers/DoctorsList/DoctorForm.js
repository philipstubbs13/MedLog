//Importing React since we are using React.
import React from "react";
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

const styles = {
    textField: {
        marginTop: 40
    },
    // Tell Material-UI what's the font-size on the html element is.
    typography: {
        htmlFontSize: 40
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        minWidth: 120,
    },
    button: {
        marginTop: 20,
        padding: 5
    },
};

class DoctorForm extends React.Component {
  render() {
        const { classes } = this.props;

        return (
            <div>
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Add a doctor
                        </Typography>
                        <form noValidate className={classes.root} autoComplete="off">
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
                                {/* <FormControl className={classes.formControl, classes.textField} fullWidth> 
                                    <InputLabel htmlFor="select-clinic-dropdown">Select a clinic</InputLabel>
                                    <Select
                                        value={this.state.clinic}
                                        onChange={this.handleChange}
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
                                        <MenuItem value={"Other"}>Other</MenuItem>
                                    </Select>
                                </FormControl> */}


                            <TextField
                                id="doctor-clinic"
                                label="Clinic"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                className={classes.textField}
                                fullWidth
                                value={this.props.doctorClinic}
                                onChange={this.props.handleDoctorClinicChange}
                            />

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
                            <Button size="large" className={classes.button} color="primary" onClick={this.props.handleDoctorFormSubmit}>
                            Add doctor
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div >
    );
    }
}

// TextFields.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(DoctorForm);
