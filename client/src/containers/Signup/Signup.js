// Importing React since we are using React.
import React, { Component } from "react";
// Importing UI components and style from material-ui-next
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
// Importing UI components from rebass.
import { Container } from 'rebass';
// Import LoginForm
import SignupForm from './SignupForm';
import axios from 'axios';
import {withRouter, Redirect} from 'react-router-dom'

const styles = {
  // Tell Material-UI what's the font-size on the html element is.
  root: {
    flexGrow: 1,
  },
  headline: {
    marginTop: 30,
  },
};

class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    credentials: [],
    error: ""
  };


  // Keep track of what user enters for username so that input can be grabbed later
  handleUsernameChange = (event) => {
    this.setState({username: event.target.value });
  }

  // Keep track of what user enters into password input field so that input can be grabbed later
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  // Keep track of what user enters into email input field so that input can be grabbed later
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }


  // When user enters credentials and clicks LOG IN button to log in.
  handleFormSubmit = event => {
    const { history } = this.props;
    event.preventDefault();
    console.log("Adding user...");
    console.log("this.state.username: ", this.state.username);
    console.log("this.state.password: ", this.state.password);
    console.log("this.state.email: ", this.state.email);
    axios.post('/Auth/signup', { username: this.state.username, password: this.state.password, email: this.state.email })
      .then((res) => {
        console.log(res.data);
      })
      .catch(err => console.log(err))
      axios.post('/Auth/login', { username: this.state.username, password: this.state.password})
      .then((res) => {
        console.log(res.data);
        history.push('/home')
      })
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
              <SignupForm
                handleFormSubmit = {this.handleFormSubmit}
                handleUsernameChange = {this.handleUsernameChange}
                handlePasswordChange = {this.handlePasswordChange}
                handleEmailChange = {this.handleEmailChange}   />
            </Grid>
          </Grid>
        </div>
      </div>,
    ];
  }
}

// Exporting the Login component
// so that the App.js file can render the Signup page.
export default withRouter(withStyles(styles)(Signup));