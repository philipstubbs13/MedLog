// Importing React since we are using React.
import React, { Component } from "react";
// Importing UI components from rebass.
import { Heading, Row, Column } from 'rebass';
// Import UI components from material-ui-next.
import { withStyles } from 'material-ui/styles';

//Style
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
});

class Attachments extends Component {
  state = {
    appointmentName: "",
    appointmentDoctor: "",
    appointmentDate: "",
    appointmentTime: "",
    appointments: [],
    error: ""
  };

  render() {
    const { classes } = this.props;
    const newLocal1 = <Heading is="h1" children="Attachments" mt={4} color="white" />;
    const newLocal = newLocal1;

    return [  
      newLocal,

      <div className="main-content-section">
        <Row mt={4}>
          <Column width={1} >

          </Column>
        </Row>

        <Row>
          <Column width={1}>

          </Column>
        </Row>
      </div>,
    ];
  }
}

// Exporting the Attachments component
// so that the App.js file can use/render the Appointments page.
export default withStyles(styles)(Attachments);
