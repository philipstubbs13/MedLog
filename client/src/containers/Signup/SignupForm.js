// Importing React since we are using React.
import React from 'react';
// Importing material-ui components and style.
import TextField from 'material-ui/TextField';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';

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
  loginButton: {
    marginTop: 40,
    padding: 15,
    backgroundColor: '#007AC1',
    float: 'right',
    color: 'white',
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
              SIGN UP for a free account
            </Typography>
            <Typography gutterBottom component="p" align="center">
              To SIGN UP, you'll need to specify your email address and create a username and password.
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
                <InputLabel htmlFor="Password">Password</InputLabel>
                <TextField
                  id="password"
                  type="password"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={this.props.password}
                  onChange={this.props.handlePasswordChange}
                />
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="email">Email</InputLabel>
                <TextField
                  id="email"
                  type="text"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={this.props.email}
                  onChange={this.props.handleEmailChange}
                />
              </FormControl>

              <Button size="large" className={classes.button} onClick={this.props.handleFormSubmit} variant="raised" color="primary">
              SIGN UP
              </Button>
              <Button size="large" className={classes.loginButton} component={Link} to="/" variant="raised" color="primary">
              Back to LOGIN page
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(LoginForm);
