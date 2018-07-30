// Importing React since we are using React.
import React, { Component } from "react";
// Importing Navbar component.
import NavBar from '../../Components/AppBar';
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
// Import UI components and style from material-ui-next.
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
// Import Sidebar component.
import Sidebar from '../../Components/Sidebar';

//Style
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    display: 'flex',
    flexWrap: 'wrap',
  }),
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#86BBD8',
    padding: theme.spacing.unit * 3,
  },
  doctorClinicList: {
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#33658A',
  },
  clinicSection: {
    marginTop: 45,
  },
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
    doctorFirstNameError: "",
    doctorLastNameError: "",
    doctorClinicError: "",
    doctorPhoneError: "",
    clinicNameError: "",
    clinicAddressError: "",
    clinicCityError: "",
    clinicStateError: "",
    clinicZipError: "",
    clinicPhoneError: "",
    doctorFormSuccessMessage: "",  
    clinicFormSuccessMessage: "",  
  };

  // When the component mounts, load all doctors and clinics and save them to this.state.doctors and this.state.clinics.
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

  // Loads all clinics and saves them to this.state.clinics.
  loadClinics = () => {
    ClinicsAPI.getClinics()
      .then(res =>
        this.setState({ clinics: res.data }))
      .catch(err => console.log('there is an issue loading doctors: ' + err));
  };

  // Deletes a doctor from the database with a given id, then reloads doctors from the db
  deleteDoctor = id => {
    DoctorsAPI.deleteDoctor(id)
      .then(res => this.loadDoctors())
      .catch(err => console.log(err));
  };

  // Deletes a clinic from the database with a given id, then reloads clinics from the db
  deleteClinic = id => {
    ClinicsAPI.deleteClinic(id)
      .then(res => this.loadClinics())
      .catch(err => console.log(err));
  };

  // Keep track of what user enters for doctor first name so that input can be grabbed later.
  // If form validation error is showing, remove error from page when user starts typing.
  handleDoctorFirstNameChange = (event) => {
    this.setState({ 
      doctorFirstName: event.target.value,
      doctorFirstNameError: "",
      doctorFormSuccessMessage: "",
    });
  }

  // Keep track of what user enters for doctor last name so that input can be grabbed later.
  // If form validation error is showing, remove error from page when user starts typing.
  handleDoctorLastNameChange = (event) => {
    this.setState({ 
      doctorLastName: event.target.value,
      doctorLastNameError: "",
      doctorFormSuccessMessage: "",
    });
  }

  // Keep track of what user types into clinic input field so that input can be grabbed later.
  // If form validation error is showing, remove error from page when user starts typing.
  handleDoctorClinicChange = (event) => {
    this.setState({ 
      doctorClinic: event.target.value,
      doctorClinicError: "",
      doctorFormSuccessMessage: "",
    });
  }

  // Keep track of what user types into phone input field so that input can be grabbed later.
  // If form validation error is showing, remove error from page when user starts typing.
  handleDoctorPhoneChange = (event) => {
    this.setState({ 
      doctorPhone: event.target.value,
      doctorPhoneError: "",
      doctorFormSuccessMessage: "",
    });
  }

    // Keep track of what user enters for clinic name so that input can be grabbed later.
    // If form validation error is showing, remove error from page when user starts typing.
  handleClinicNameChange = (event) => {
    this.setState({ 
      clinicName: event.target.value,
      clinicNameError: "",
      clinicFormSuccessMessage: "",
    });
  }

  // Keep track of what user enters for clinic address so that input can be grabbed later.
  // If form validation error is showing, remove error from page when user starts typing.
  handleClinicAddressChange = (event) => {
    this.setState({ 
      clinicAddress: event.target.value,
      clinicAddressError: "",
      clinicFormSuccessMessage: "",
    });
  }

  // Keep track of what user types into clinic city field so that input can be grabbed later.
  // If form validation error is showing, remove error from page when user starts typing.
  handleClinicCityChange = (event) => {
    this.setState({ 
      clinicCity: event.target.value,
      clinicCityError: "",
      clinicFormSuccessMessage: "",
    });
  }

  // Keep track of what user types into clinic state field so that input can be grabbed later.
  // If form validation error is showing, remove error from page when user starts typing.
  handleClinicStateChange = (event) => {
    this.setState({ 
      clinicState: event.target.value,
      clinicStateError: "",
      clinicFormSuccessMessage: "",
    });
  }

   // Keep track of what user types into zip code field so that input can be grabbed later.
   // If form validation error is showing, remove error from page when user starts typing.
  handleClinicZipChange = (event) => {
    this.setState({ 
      clinicZip: event.target.value,
      clinicZipError: "",
      clinicFormSuccessMessage: "",
    });
  }

  // Keep track of what user types into phone input field so that input can be grabbed later.
  // If form validation error is showing, remove error from page when user starts typing.
  handleClinicPhoneChange = (event) => {
    this.setState({ 
      clinicPhone: event.target.value,
      clinicPhoneError: "",
      clinicFormSuccessMessage: "",
    });
  }

  // When user submits doctor form, save doctor to database.
  handleDoctorFormSubmit = event => {
    event.preventDefault();

        // If doctor first name field is empty when user submits form, show error.
    if (this.state.doctorFirstName === "") {
      this.setState({
        doctorFirstNameError: "First name is required."
      })
    }

    // If the doctor last name field is empty when user submits form, show error.
    if (this.state.doctorLastName === "") {
      this.setState({
        doctorLastNameError: "Last name is required."
      })
    }

    // if the select clinic field is empty when user submits form, show error.
    if (this.state.doctorClinic === "") {
      this.setState({
        doctorClinicError: "From the drop-down list, select the primary clinic that the doctor is associated with."
      })
    }

    // if the doctor phone number field is empty when user submits form, show error.
    if (this.state.doctorPhone === "") {
      this.setState({
        doctorPhoneError: "Phone number is required."
      })
    }

    else {
      //Save doctor to database if all fields are filled out.s
      // Show form success message to user.
      DoctorsAPI.saveDoctor({
        firstname: this.state.doctorFirstName,
        lastname: this.state.doctorLastName,
        clinic: this.state.doctorClinic,
        phone: this.state.doctorPhone,
      })
        .then(res => this.loadDoctors())
        .catch(err => console.log('there is a problem saving doctor: ' + err));

      this.setState({
          doctorFormSuccessMessage: `Dr. ${this.state.doctorFirstName} ${this.state.doctorLastName} added successfully!`,
      });

      // Clear form
      document.getElementById('doctor-form').reset();
    }
  };

  // When user submits clinic form, save clinic to database.
  handleClinicFormSubmit = event => {
    event.preventDefault();

    // If clinic name field is empty when user submits form, show error.
    if (this.state.clinicName === "") {
      this.setState({
        clinicNameError: "Name is required."
      })
    }

    // If the clinic address field is empty when user submits form, show error.
    if (this.state.clinicAddress === "") {
      this.setState({
        clinicAddressError: "Address is required."
      })
    }

    // if the clinic city field is empty when user submits form, show error.
    if (this.state.clinicCity === "") {
      this.setState({
        clinicCityError: "City is required."
      })
    }

    // if the clinic state field is empty when user submits form, show error.
    if (this.state.clinicState === "") {
      this.setState({
        clinicStateError: "State is required."
      })
    }

    // if the clinic zip code field is empty when user submits form, show error.
    if (this.state.clinicZip === "") {
      this.setState({
        clinicZipError: "Zip code is required."
      })
    }

    // if the clinic phone number field is empty when user submits form, show error.
    if (this.state.clinicPhone === "") {
      this.setState({
        clinicPhoneError: "Phone number is required."
      })
    }

    else {
      // Save clinic to database if all fields are filled out.
      // Show form success message to user.
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

        this.setState({
          clinicFormSuccessMessage: `${this.state.clinicName} added successfully!`,
      });

      // Clear form
      document.getElementById('clinic-form').reset();
    }
  };

  render() {
    const { classes } = this.props;

    return [
      <NavBar />,  
      <div className={classes.appFrame}>
        <Sidebar />
        <main className={classes.content}>
          <div style={{ padding: 70 }}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography variant="display1" align="left">
                  Doctors and clinics
                </Typography>
              </Grid>
            </Grid>

            <div className="main-content-section">
              <Grid container spacing={16}>
                <Grid item xs={12} sm={12} md={6}>
                  <DoctorForm 
                    clinics = {this.state.clinics}
                    handleDoctorFormSubmit={this.handleDoctorFormSubmit}
                    handleDoctorFirstNameChange={this.handleDoctorFirstNameChange}
                    handleDoctorLastNameChange={this.handleDoctorLastNameChange}
                    handleDoctorClinicChange={this.handleDoctorClinicChange}
                    handleDoctorPhoneChange={this.handleDoctorPhoneChange} 
                    doctorFirstNameError = {this.state.doctorFirstNameError}
                    doctorLastNameError = {this.state.doctorLastNameError}
                    doctorClinicError = {this.state.doctorClinicError}
                    doctorPhoneError = {this.state.doctorPhoneError} 
                    doctorFormSuccessMessage = {this.state.doctorFormSuccessMessage}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Paper elevation={4} className={classes.doctorClinicList}>
                    <Typography gutterBottom variant="headline" component="h2" style={{textAlign: 'center'}} >
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
                          doctorPhone={doctor.phone}
                          deleteDoctor = { this.deleteDoctor } />
                      );
                    })}
                  </Paper>
                </Grid>
              </Grid>

              <Grid container spacing={16} className={classes.clinicSection}>
                <Grid item xs={12} sm={12} md={6}>
                  <ClinicForm
                    handleClinicFormSubmit={this.handleClinicFormSubmit}
                    handleClinicNameChange={this.handleClinicNameChange}
                    handleClinicAddressChange={this.handleClinicAddressChange}
                    handleClinicCityChange={this.handleClinicCityChange}
                    handleClinicStateChange={this.handleClinicStateChange}
                    handleClinicZipChange={this.handleClinicZipChange}
                    handleClinicPhoneChange={this.handleClinicPhoneChange}
                    clinicNameError = {this.state.clinicNameError}
                    clinicAddressError = {this.state.clinicAddressError}
                    clinicCityError = {this.state.clinicCityError}
                    clinicStateError = {this.state.clinicStateError}
                    clinicZipError = {this.state.clinicZipError}
                    clinicPhoneError = {this.state.clinicPhoneError}
                    clinicFormSuccessMessage = {this.state.clinicFormSuccessMessage}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <div>
                    <Paper elevation={4} className={classes.doctorClinicList}>
                      <Typography gutterBottom variant="headline" component="h2" style={{textAlign: 'center'}}>
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
                            clinicPhone={clinic.phone}
                            deleteClinic={this.deleteClinic} />
                        );
                      })}
                    </Paper>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </main>
      </div>,
    ];
  }
}

// Exporting the DoctorList component so that the App.js file
// can use/render the My Doctor List page.
export default withStyles(styles)(DoctorList);
