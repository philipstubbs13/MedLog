// Importing React since we are using React.
import React, { Component } from "react";
// Importing UI components from rebass.
import { Heading, Row, Column, Container} from 'rebass';
// Importing UI components from material-ui-next
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
// Import LoginForm
import LoginForm from './LoginForm';

const styles = {
  // Tell Material-UI what's the font-size on the html element is.
  typography: {
    htmlFontSize: 40,
    color: 'white',
  },
};

class Login extends Component {
  state = {
    username: "",
    password: "",
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


  // When user enters credentials and clicks LOG IN button to log in.
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Authenticating user...");
    console.log("this.state.username: ", this.state.username);
    console.log("this.state.password: ", this.state.password);
  };

  render() {
    return [ 
      <Container>
        <Typography gutterBottom variant="headline" component="h2" className="header">
          Welcome to HealthTracker!
        </Typography>,

        <div className="main-content-section">
          <Row>
            <Column width={1} >
              <LoginForm
                handleFormSubmit = {this.handleFormSubmit}
                handleUsernameChange = {this.handleUsernameChange}
                handlePasswordChange = {this.handlePasswordChange}  />
            </Column>
          </Row>
        </div>
      </Container>,
    ];
  }
}

// Exporting the Login component
// so that the App.js file can render the Login page.
export default withStyles(styles)(Login);