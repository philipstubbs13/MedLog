// Importing React since we are using React.
import React from 'react';
// Importing UI components from material-ui-next
import Typography from 'material-ui/Typography';
import {InputLabel, InputAdornment} from 'material-ui/Input';
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

class  LogForm extends React.Component {
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
                        Add doctor notes
                    </Typography>
                    <form noValidate className={classes.root} autoComplete="off">
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
                            id="doctor-visit-date"
                            label="Date of doctor visit"
                            type="date"
                            defaultValue="MM-DD-YYYY"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                        />

                        <FormControl className={classes.formControl, classes.textField} fullWidth>
                            <InputLabel htmlFor="select-clinic-dropdown">Select a clinic</InputLabel>
                            <Select
                                value={this.state.name}
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
                                <MenuItem value={"E"}>Clinic E</MenuItem>
                                <MenuItem value={"F"}>Clinic F</MenuItem>
                                <MenuItem value={"Other"}>Other</MenuItem>
                            </Select>
                        </FormControl>

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
                        />

                        <InputLabel className={classes.textField} htmlFor="select-clinic-dropdown">Lab results</InputLabel>
                        <Button className={classes.button}>
                            <input type="file" />
                        </Button>

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
                        />

                        <Button size="large" className={classes.button} color="primary">
                            Submit
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

 