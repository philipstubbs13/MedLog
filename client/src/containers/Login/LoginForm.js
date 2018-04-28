// Importing React since we are using React.
import React from 'react';
// Importing material-ui components and style.
import TextField from 'material-ui/TextField';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

// Style
const styles = theme => ({
  textField: {
    marginTop: 80,
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
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#007AC1',
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
            <Typography gutterBottom variant="headline" component="h2">
            Login
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
                id="username"
                label="Username"
                type="text"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                value={this.props.username}
                onChange={this.props.handleUsernameChange}
              />

              <TextField
                id="password"
                label="Password"
                type="text"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                value={this.props.password}
                onChange={this.props.handlePasswordChange}
              />

              <Button size="large" className={classes.button} onClick={this.props.handleFormSubmit}>
              LOGIN
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
