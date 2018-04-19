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

class ClinicForm extends React.Component {
    state = {
        name: '',
        state: '',
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
                            Add a clinic
                        </Typography>
                        <form noValidate className={classes.root} autoComplete="off">
                            <TextField
                                id="clinic-name"
                                label="Name of clinic"
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
                                id="clinic-address"
                                label="Clinic address"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                className={classes.textField}
                                fullWidth
                            />

                            <TextField
                                id="clinic-city"
                                label="City"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                className={classes.textField}
                                fullWidth
                            />
                            <FormControl className={classes.formControl, classes.textField} fullWidth>
                                    <InputLabel htmlFor="select-state-dropdown">State</InputLabel>
                                <Select
                                    value={this.state.state}
                                    onChange={this.handleChange}
                                    inputProps={{
                                        state: '',
                                        id: 'select-clinic-state',
                                    }}
                                >
                                    <MenuItem value=""></MenuItem>
                                    <MenuItem value={"AL"}>Alabama</MenuItem>
                                    <MenuItem value={"AK"}>Alaska</MenuItem>
                                    <MenuItem value={"AZ"}>Arizona</MenuItem>
                                    <MenuItem value={"CA"}>California</MenuItem>
                                    <MenuItem value={"CO"}>Colorado</MenuItem>
                                    <MenuItem value={"CT"}>Connecticut</MenuItem>
                                    <MenuItem value={"DE"}>Delaware</MenuItem>
                                    <MenuItem value={"FL"}>Florida</MenuItem>
                                    <MenuItem value={"GA"}>Georgia</MenuItem>
                                    <MenuItem value={"HI"}>Hawaii</MenuItem>
                                    <MenuItem value={"ID"}>Idaho</MenuItem>
                                    <MenuItem value={"IL"}>Illinois</MenuItem>
                                    <MenuItem value={"IN"}>Indiana</MenuItem>
                                    <MenuItem value={"IA"}>Iowa</MenuItem>
                                    <MenuItem value={"KS"}>Kansas</MenuItem>
                                    <MenuItem value={"KY"}>Kentucy</MenuItem>
                                    <MenuItem value={"LA"}>Louisiana</MenuItem>
                                    <MenuItem value={"ME"}>Maine</MenuItem>
                                    <MenuItem value={"MD"}>Maryland</MenuItem>
                                    <MenuItem value={"MA"}>Massachusetts</MenuItem>
                                    <MenuItem value={"MI"}>Michigan</MenuItem>
                                    <MenuItem value={"MN"}>Minnesota</MenuItem>
                                    <MenuItem value={"MS"}>Mississppi</MenuItem>
                                    <MenuItem value={"MO"}>Missouri</MenuItem>
                                    <MenuItem value={"MT"}>Montana</MenuItem>
                                    <MenuItem value={"NE"}>Nebraska</MenuItem>
                                    <MenuItem value={"NV"}>Nevada</MenuItem>
                                    <MenuItem value={"NH"}>New Hampshire</MenuItem>
                                    <MenuItem value={"NJ"}>New Jersey</MenuItem>
                                    <MenuItem value={"NM"}>New Mexico</MenuItem>
                                    <MenuItem value={"NY"}>New York</MenuItem>
                                    <MenuItem value={"NC"}>North Carolina</MenuItem>
                                    <MenuItem value={"ND"}>North Dakota</MenuItem>
                                    <MenuItem value={"OH"}>Ohio</MenuItem>
                                    <MenuItem value={"OK"}>Oklahoma</MenuItem>
                                    <MenuItem value={"OR"}>Oregon</MenuItem>
                                    <MenuItem value={"PA"}>Pennsylvania</MenuItem>
                                    <MenuItem value={"RI"}>Rhode Island</MenuItem>
                                    <MenuItem value={"SC"}>South Carolina</MenuItem>
                                    <MenuItem value={"SD"}>South Dakota</MenuItem>
                                    <MenuItem value={"TN"}>Tennessee</MenuItem>
                                    <MenuItem value={"TX"}>Texas</MenuItem>
                                    <MenuItem value={"UT"}>Utah</MenuItem>
                                    <MenuItem value={"VT"}>Vermont</MenuItem>
                                    <MenuItem value={"VA"}>Virginia</MenuItem>
                                    <MenuItem value={"WA"}>Washington</MenuItem>
                                    <MenuItem value={"WV"}>West Virginia</MenuItem>
                                    <MenuItem value={"WI"}>Wisconsin</MenuItem>
                                    <MenuItem value={"WY"}>Wyoming</MenuItem>
                                </Select>
                            </FormControl>

                            <TextField
                                id="clinic-zip-code"
                                label="Zip code"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                className={classes.textField}
                                fullWidth
                            />

                            <TextField
                                id="clinic-phone"
                                label="Phone number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                className={classes.textField}
                                fullWidth
                            />

                            <Button size="large" className={classes.button} color="primary">
                                Add clinic
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

export default withStyles(styles)(ClinicForm);