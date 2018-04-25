// Importing React since we are using React.
import React, { Component } from "react";
// Importing UI components from rebass.
import { Heading, Row, Column } from 'rebass';
// Import DoctorForm
import DoctorForm from './DoctorForm';
// Import DoctorInfo
import DoctorInfo from './DoctorInfo';
// Import ClinicInfo
import ClinicInfo from './ClinicInfo';
// Import ClinicForm
import ClinicForm from './ClinicForm';
// Import API
import DoctorAPI from '../../utils/DoctorsAPI';
// Import UI components from material-ui-next.
import { withStyles } from 'material-ui/styles';

//Style
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
});

class DoctorList extends Component {
  state = {
    doctorFirstName: "",
    doctorLastName: "",
    doctorClinic: "",
    doctorPhone: "",
    doctors: [],
    error: ""
  };

  componentDidMount() {
    this.loadDoctors();
  }

//for rendering doctors list 
  loadDoctors = () => {
    DoctorAPI.getDoctors()
      .then(res =>
        this.setState({ doctors: res.data }))
      .catch(err => console.log('there is an issue loading doctors: ' + err));
  };

  // Keep track of what user enters for doctor first name so that input can be grabbed later
  handleDoctorFirstNameChange = (event) => {
    this.setState({ doctorFirstName: event.target.value });
  }

  // Keep track of what user enters for doctor last name so that input can be grabbed later
  handleDoctorLastNameChange = (event) => {
    this.setState({ doctorLastName: event.target.value });
  }

  // Keep track of what user types into clinic input field so that input can be grabbed later
  handleDoctorClinicChange = (event) => {
    this.setState({ doctorClinic: event.target.value });
  }

  // Keep track of what user types into phone input field so that input can be grabbed later
  handleDoctorPhoneChange = (event) => {
    this.setState({ doctorPhone: event.target.value });
  }

  handleDoctorFormSubmit = event => {
    event.preventDefault();
    console.log("Adding doctor - done in doctorslist.js");
    console.log("this.state.doctorFirstName: ", this.state.doctorFirstName);
    console.log("this.state.doctorLastName: ", this.state.doctorLastName);
    console.log("this.state.doctorClinic: ", this.state.doctorClinic);
    console.log("this.state.doctorPhone: ", this.state.doctorPhone);
    DoctorAPI.saveDoctor({
      firstname: this.state.doctorFirstName,
      lastname: this.state.doctorLastName,
      clinic: this.state.doctorClinic,
      phone: this.state.doctorPhone,
    })
      .then(res => this.loadDoctors())
      .catch(err => console.log('there is a problem saving doctor: ' + err));
  };

  render() {
    const { classes } = this.props;
    const newLocal1 = <Heading is="h1" children="Doctors and clinics" mt={4} color="white" />;
    const newLocal = newLocal1;

    return [  
      newLocal,

      <div className="main-content-section">
        <Row mt={4}>
          <Column width={1 / 2} >
            <DoctorForm 
              handleDoctorFormSubmit={this.handleDoctorFormSubmit}
              handleDoctorFirstNameChange={this.handleDoctorFirstNameChange}
              handleDoctorLastNameChange={this.handleDoctorLastNameChange}
              handleDoctorClinicChange={this.handleDoctorClinicChange}
              handleDoctorPhoneChange={this.handleDoctorPhoneChange} />
          </Column>
          <Column width={1 / 2} ml={5}>
            <DoctorInfo />
          </Column>
        </Row>

        {/* <Row mt={4}>
          <Column width={1 / 2} >
            <ClinicForm />
          </Column>
          <Column width={1 / 2} ml={5}>
            <ClinicInfo />
          </Column>
        </Row> */}
      </div>,
    ];
  }
}
// Exporting the DoctorList component so that the App.js file
// can use/render the My Doctor List page.
export default DoctorList;
