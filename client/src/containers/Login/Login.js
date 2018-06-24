// Importing React since we are using React.
import React, { Component } from "react";
// Importing UI components and style from material-ui-next
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
// Import LoginForm
import LoginForm from './LoginForm';
import axios from 'axios';
import { withRouter } from 'react-router-dom'


const styles = {
  // Tell Material-UI what's the font-size on the html element is.
  root: {
    flexGrow: 1,
  },
  headline: {
    marginTop: 30,
  },
};

class Login extends Component {
  state = {
    username: "",
    password: "",
    credentials: [],
    usernameMissingError: "",
    passwordMissingError: "",
  };


  // Keep track of what user enters for username so that input can be grabbed later.
  // If form validation error is showing, remove error from page when user starts typing.
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
      usernameMissingError: "",
    });
  }

  // Keep track of what user enters into password input field so that input can be grabbed later.
  // If form validation error is showing, remove error from page when user starts typing.
  handlePasswordChange = (event) => {
    this.setState({ 
      password: event.target.value,
      passwordMissingError: "",
    });
  }


  // When user enters credentials and clicks LOG IN button to log in.
  handleFormSubmit = event => {
    const { history, setUser } = this.props;
    event.preventDefault();

    // If username field is empty when user submits form, show error.
    if (this.state.username === "") {
      this.setState({
        usernameMissingError: "Username is required."
      })
    }

    // If the password field is empty when user submits form, show error.
    if (this.state.password === "") {
      this.setState({
        passwordMissingError: "Password is required."
      })
    }

    setUser("i am the user")
    axios.post('/Auth/login', { username: this.state.username, password: this.state.password})
      .then((res) => {
        console.log(res.data);
        setUser(res.data.userId)
        history.push('/home')
        
      })
      .catch(err => console.log(err))
  };

  render() {
    const { classes } = this.props;
    return [
      <div style={{ padding: 70 }}>
        <Grid item xs={12} className={classes.headline}>
          <Grid container spacing={16} className={classes.root} justify="center">
            <Typography variant="display1">
              Welcome to HealthTracker
            </Typography>
          </Grid>
        </Grid>,

        <div className="main-content-section">
          <Grid item xs={12} className={classes.headline}>
            <Grid container spacing={16} className={classes.root} justify="center">
              <LoginForm
                handleFormSubmit = {this.handleFormSubmit}
                handleUsernameChange = {this.handleUsernameChange}
                handlePasswordChange = {this.handlePasswordChange}
                usernameMissingError = {this.state.usernameMissingError}
                passwordMissingError = {this.state.passwordMissingError}  
              />
            </Grid>
          </Grid>
        </div>
      </div>,
    ];
  }
}

// Exporting the Login component
// so that the App.js file can render the Login page.
export default withRouter(withStyles(styles)(Login));