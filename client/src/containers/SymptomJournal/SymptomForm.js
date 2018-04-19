//Importing React since we are using React.
import React from "react";
//Importing material-ui components and style.
import TextField from 'material-ui/TextField';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';

const styles = {
    textField: {
        marginTop: 80
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

class SymptomTextFields extends React.Component {
  state = {
    name: '',
    age: '',
    multiline: 'Controlled',
    symptom: '',
  };

  handleChange = name => event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { classes, theme } = this.props;

    return (
        <div>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        Add a symptom
                    </Typography>
                    <form noValidate className={classes.root} autoComplete="off">
                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel htmlFor="select-symptom-dropdown">Select symptom</InputLabel>
                            <Select
                                value={this.state.name}
                                onChange={this.handleChange}
                                inputProps={{
                                symptom: 'symptom',
                                id: 'select-symptom',
                                }}
                            >
                                <MenuItem value=""></MenuItem>
                                <MenuItem value={"Dizzy"}>Dizzy</MenuItem>
                                <MenuItem value={"Shortness of breath"}>Shortness of breath</MenuItem>
                                <MenuItem value={"Fainted"}>Fainted</MenuItem>
                                <MenuItem value={"Swelling"}>Swelling</MenuItem>
                                <MenuItem value={"Heart Fluttering"}>Heart Fluttering</MenuItem>
                                <MenuItem value={"Fatigue"}>Fatigue</MenuItem>
                                <MenuItem value={"Other"}>Other</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            id="symptom-day"
                            label="Day the symptom occurred"
                            type="date"
                            defaultValue="DD-MM-YYYY"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                        />

                        <TextField
                            id="symptom-time"
                            label="Time symptom occurred"
                            type="timedatetime-local"
                            defaultValue="10:30"
                            className={classes.textField}
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                        id="additional-symptom-info"
                        label="Additional information you want to share with the doctor"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder=""
                        helperText=""
                        fullWidth
                        className={classes.textField}
                        multiline="true"
                        rows={2}
                        rowsMax={3}
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

export default withStyles(styles)(SymptomTextFields);
