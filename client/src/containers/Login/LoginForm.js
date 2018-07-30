// Importing React since we are using React.
import React from 'react';
// Importing material-ui components and style.
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import InputAdornment from 'material-ui/Input/InputAdornment';
import Input from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';

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
    borderColor: '#2F4858',
  },
  formControl: {
    minWidth: 120,
    marginTop: 30,
  },
  button: {
    marginTop: 40,
    padding: 15,
    backgroundColor: '#33658A',
    color: 'white',
  },
  signUpButton: {
    marginTop: 40,
    padding: 15,
    backgroundColor: '#33658A',
    color: 'white',
    float: 'right',
  },
  formError: {
    color: 'red',
  }
});

class LoginForm extends React.Component {
  // State to toggle password visibility.
  state = {
    password: '',
    showPassword: false,
  };

  // Toggle password visibility
  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  // Toggle password visiblity
  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="animated bounceInLeft">
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
                <Input
                  id="username"
                  type="text"
                  value={this.props.username}
                  onChange={this.props.handleUsernameChange}
                  className={classes.textField}
                />
                <Typography className={classes.formError} component="p">{this.props.usernameMissingError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type={this.state.showPassword ? 'text' : 'password'}
                  value={this.props.password}
                  onChange={this.props.handlePasswordChange}
                  className={classes.textField}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                        onMouseDown={this.handleMouseDownPassword}
                      >
                        {this.state.showPassword ? <i className="fas fa-eye-slash" /> : <i className="fas fa-eye" />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <Typography className={classes.formError} component="p">{this.props.passwordMissingError}</Typography>
              </FormControl>

              <Button size="large" className={classes.button} onClick={this.handleClickShowPassword} onMouseDown={this.handleMouseDownPassword}variant="raised" color="primary">
              {this.state.showPassword ? "HIDE PASSWORD" : "SHOW PASSWORD"}
              </Button>
              <br />

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

// Export the LoginForm component with styling.
export default withStyles(styles)(LoginForm);
