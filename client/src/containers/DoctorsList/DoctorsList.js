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
import DoctorsAPI from '../../utils/DoctorsAPI';
import ClinicsAPI from '../../utils/ClinicsAPI';
// Import UI components from material-ui-next.
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

//Style
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    display: 'flex',
    flexWrap: 'wrap',
  }),
});

class DoctorList extends Component {
  state = {
    doctorFirstName: "",
    doctorLastName: "",
    doctorClinic: "",
    doctorPhone: "",
    doctors: [],
    clinicName: "",
    clinicAddress: "",
    clinicCity: "",
    clinicState: "",
    clinicZip: "",
    clinicPhone: "",
    clinics: [],
    error: ""
  };

  componentDidMount() {
    this.loadDoctors();
    this.loadClinics();
  }

//for rendering doctors list 
  loadDoctors = () => {
    DoctorsAPI.getDoctors()
      .then(res =>
        this.setState({ doctors: res.data }))
      .catch(err => console.log('there is an issue loading doctors: ' + err));
  };

  loadClinics = () => {
    ClinicsAPI.getClinics()
      .then(res =>
        this.setState({ clinics: res.data }))
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

    // Keep track of what user enters for clinic name so that input can be grabbed later
  handleClinicNameChange = (event) => {
    this.setState({ clinicName: event.target.value });
  }

  // Keep track of what user enters for clinic address so that input can be grabbed later
  handleClinicAddressChange = (event) => {
    this.setState({ clinicAddress: event.target.value });
  }

  // Keep track of what user types into clinic city field so that input can be grabbed later
  handleClinicCityChange = (event) => {
    this.setState({ clinicCity: event.target.value });
  }

  // Keep track of what user types into clinic state field so that input can be grabbed later
  handleClinicStateChange = (event) => {
    this.setState({ clinicState: event.target.value });
  }

   // Keep track of what user types into zip code field so that input can be grabbed later
  handleClinicZipChange = (event) => {
    this.setState({ clinicZip: event.target.value });
  }

  // Keep track of what user types into phone input field so that input can be grabbed later
  handleClinicPhoneChange = (event) => {
    this.setState({ clinicPhone: event.target.value });
  }

  handleDoctorFormSubmit = event => {
    event.preventDefault();
    console.log("Adding doctor - done in doctorslist.js");
    console.log("this.state.doctorFirstName: ", this.state.doctorFirstName);
    console.log("this.state.doctorLastName: ", this.state.doctorLastName);
    console.log("this.state.doctorClinic: ", this.state.doctorClinic);
    console.log("this.state.doctorPhone: ", this.state.doctorPhone);
    DoctorsAPI.saveDoctor({
      firstname: this.state.doctorFirstName,
      lastname: this.state.doctorLastName,
      clinic: this.state.doctorClinic,
      phone: this.state.doctorPhone,
    })
      .then(res => this.loadDoctors())
      .catch(err => console.log('there is a problem saving doctor: ' + err));
  };

  handleClinicFormSubmit = event => {
    event.preventDefault();
    console.log("Adding clinic");
    console.log("this.state.clinicName: ", this.state.clinicName);
    console.log("this.state.clinicAddress: ", this.state.clinicAddress);
    console.log("this.state.clinicCity: ", this.state.clinicCity);
    console.log("this.state.clinicState: ", this.state.clinicState);
    console.log("this.state.clinicZip: ", this.state.clinicZip);
    console.log("this.state.clinicPhone: ", this.state.clinicPhone);
    ClinicsAPI.saveClinic({
      clinicname: this.state.clinicName,
      address: this.state.clinicAddress,
      city: this.state.clinicCity,
      state: this.state.clinicState,
      zip: this.state.clinicZip,
      phone: this.state.clinicPhone,
    })
      .then(res => this.loadClinics())
      .catch(err => console.log('there is a problem saving doctor: ' + err));
  };

  render() {
    // const { classes } = this.props;
    // const newLocal1 = <Heading is="h1" children="Doctors and clinics" mt={4} ml={4} color="white" />;
    // const newLocal = newLocal1;

    return [  
      // newLocal,

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
                  <Paper elevation={4}>
                    <Typography gutterBottom variant="headline" component="h2">
                      Doctors list
                    </Typography>
                      {this.state.doctors.map(doctor => {
                        return (
                          <DoctorInfo 
                            id={doctor._id}
                            key={doctor._id}
                            doctorFirstName={doctor.firstname}
                            doctorLastName={doctor.lastname}
                            doctorClinic={doctor.clinic}
                            doctorPhone={doctor.phone}/>
                        );
                      })}
                  </Paper>
          </Column>
        </Row>

        <Row mt={4}>
          <Column width={1 / 2} >
            <ClinicForm
              handleClinicFormSubmit={this.handleClinicFormSubmit}
              handleClinicNameChange={this.handleClinicNameChange}
              handleClinicAddressChange={this.handleClinicAddressChange}
              handleClinicCityChange={this.handleClinicCityChange}
              handleClinicStateChange={this.handleClinicStateChange}
              handleClinicZipChange={this.handleClinicZipChange}
              handleClinicPhoneChange={this.handleClinicPhoneChange}  />
          </Column>
          <Column width={1 / 2} ml={5}>
            <div>
              <Paper elevation={4}>
                <Typography gutterBottom variant="headline" component="h2">
                  Clinics
                </Typography>
                  {this.state.clinics.map(clinic => {
                    return (
                      <ClinicInfo 
                        id={clinic._id}
                        key={clinic._id}
                        clinicName={clinic.clinicname}
                        clinicAddress={clinic.address}
                        clinicCity={clinic.city}
                        clinicState={clinic.state}
                        clinicZip={clinic.zip}
                        clinicPhone={clinic.phone}/>
                    );
                  })}
              </Paper>
            </div>
          </Column>
        </Row>
      </div>,
    ];
  }
}
// Exporting the DoctorList component so that the App.js file
// can use/render the My Doctor List page.
export default DoctorList;
