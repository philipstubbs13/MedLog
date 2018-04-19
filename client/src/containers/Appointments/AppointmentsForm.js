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
        marginTop:20,
        padding: 5
    },
};

class  AppointmentsForm extends React.Component {
  state = {
    name: '',
    age: '',
    multiline: 'Controlled',
    doctor: '',
    clinic: '',
  };

  handleChange = name => event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
        <div>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        Add an appointment
                    </Typography>
                    <form noValidate className={classes.root} autoComplete="off">
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
                        />

                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel htmlFor="select-doctor-dropdown">Select a doctor</InputLabel>
                            <Select
                                value={this.state.name}
                                onChange={this.handleChange}
                                inputProps={{
                                doctor: '',
                                id: 'select-doctor',
                                }}
                            >
                                <MenuItem value=""></MenuItem>
                                <MenuItem value={"Pain"}>Dr. Pain</MenuItem>
                                <MenuItem value={"Joins"}>Dr. Jones</MenuItem>
                                <MenuItem value={"Johnson"}>Dr. Johnson</MenuItem>
                                <MenuItem value={"Smith"}>Dr. Smith</MenuItem>
                                <MenuItem value={"Phil"}>Dr. Phil</MenuItem>
                                <MenuItem value={"J"}>Dr. J</MenuItem>
                                <MenuItem value={"Other"}>Other</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            id="appointment-date"
                            label="Date of appointment"
                            type="date"
                            defaultValue="MM-DD-YYYY"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
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
                        />

                        <Button size="large" className={classes.button} color="primary">
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
