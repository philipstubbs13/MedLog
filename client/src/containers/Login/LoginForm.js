// Importing React since we are using React.
import React from 'react';
// Importing material-ui components and style.
import TextField from 'material-ui/TextField';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

// Style
const styles = theme => ({
  textField: {
    marginTop: 60,
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing.unit * 3,
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#f44e03',
  },
  formControl: {
    minWidth: 120,
    marginTop: 30,
  },
  button: {
    marginTop: 40,
    padding: 15,
    backgroundColor: '#007AC1',
    color: 'white',
  },
  signUpButton: {
    marginTop: 40,
    padding: 15,
    backgroundColor: '#007AC1',
    color: 'white',
    float: 'right',
  },
});

class LoginForm extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2" align="center">
            LOGIN
            </Typography>
            <Typography gutterBottom component="p" align="center">
            Enter your HealthTracker credentials to LOG IN or click SIGN UP to create an account.
            </Typography>
            <form noValidate autoComplete="off">
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="Username">Username</InputLabel>
                <TextField
                  id="username"
                  type="text"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={this.props.username}
                  onChange={this.props.handleUsernameChange}
                />
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <TextField
                  id="password"
                  type="text"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={this.props.password}
                  onChange={this.props.handlePasswordChange}
                />
              </FormControl>

              <Button size="large" className={classes.button} onClick={this.props.handleFormSubmit} variant="raised" color="primary">
              LOG IN
              </Button>
              <Button size="large" className={classes.signUpButton} component={Link} to="/signup" variant="raised" color="primary">
              SIGN UP
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

export default withStyles(styles)(LoginForm);
