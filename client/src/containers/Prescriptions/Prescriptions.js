// Importing React since we are using React.
import React, { Component } from "react";
// Importing Navbar component.
import NavBar from '../../Components/AppBar';
// Import PrescriptionsForm
import PrescriptionsForm from  './PrescriptionsForm';
// Import PrescriptionsList
import PrescriptionsList from './PrescriptionsList';
// Import API
import PrescriptionsAPI from '../../utils/PrescriptionsAPI';
// Import style and components from material-ui-next
import DoctorsAPI from '../../utils/DoctorsAPI';
// Import style from material-ui-next
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
// Import Sidebar component.
import Sidebar from '../../Components/Sidebar';

// Style/Theme
const styles = theme => ({
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
});

class Prescriptions extends Component {
  state = {
    prescriptionName: "",
    prescriptionDoctor: "",
    prescriptionDate: "",
    prescriptionAmount: "",
    prescriptionDirections: "",
    prescriptions: [],
    prescriptionNameError: "",
    prescriptionDoctorError: "",
    prescriptionAmountError: "",
    prescriptionDirectionsError: "",
    formSuccessMessage: "",
    doctors: [],
  };

    // When the component mounts, load all prescriptions and save them to this.state.prescriptions.
    componentDidMount() {
        this.loadPrescriptions();
        this.loadDoctors();
    }

    // Loads all prescriptions and saves them to this.state.prescriptions.
    loadPrescriptions = () => {
        PrescriptionsAPI.getPrescriptions()
            .then(res =>
              this.setState({ 
                prescriptions: res.data
              }))
            .catch(err => console.log('loading prescriptions is not working: ' + err));
    };

    //Loads all doctors and saves them to this.state.doctors.
    loadDoctors = () => {
      DoctorsAPI.getDoctors()
        .then(res =>
          this.setState({ doctors: res.data })
        )
        .catch(err => console.log('getting doctors did not work: ', err));
    };

    // Deletes a prescription from the database with a given id, then reloads prescriptions from the db
    deletePrescription = id => {
        PrescriptionsAPI.deletePrescription(id)
            .then(res => this.loadPrescriptions())
            .catch(err => console.log(err));
    };

    // Keep track of what user types for prescription name so that input can be grabbed later.
    // If form validation error is showing, remove error from page when user starts typing.
    handlePrescriptionNameChange = (event) => {
        this.setState({ 
          prescriptionName: event.target.value,
          prescriptionNameError: "",
          formSuccessMessage: "",
        });
    }

    // Keep track of what user select for prescribing doctor input field so that input can be grabbed later.
    // If form validation error is showing, remove error from page when user starts typing.
    handlePrescriptionDoctorChange = (event) => {
        this.setState({ 
          prescriptionDoctor: event.target.value,
          prescriptionDoctorError: "",
          formSuccessMessage: "",
        });
    }

    // Keep track of what user types into prescription date input field so that input can be grabbed later.
    // If form validation error is showing, remove error from page when user starts typing.
    handlePrescriptionDateChange = (event) => {
        this.setState({ 
          prescriptionDate: event.target.value,
          prescriptionDateError: "",
          formSuccessMessage: "",
        });
    }

    // Keep track of what user types into number of tablets input field so that input can be grabbed later.
    // If form validation error is showing, remove error from page when user starts typing.
    handlePrescriptionAmountChange = (event) => {
        this.setState({ 
          prescriptionAmount: event.target.value,
          prescriptionAmountError: "",
          formSuccessMessage: "",
        });
    }

    // Keep track of what user types into directions for use input field so that input can be grabbed later.
    // If form validation error is showing, remove error from page when user starts typing.
    handlePrescriptionDirectionsChange = (event) => {
        this.setState({ 
          prescriptionDirections: event.target.value,
          prescriptionDirectionsError: "",
          formSuccessMessage: "",
        });
    }

    // When user submits prescription form, save prescription information to database.
    handleFormSubmit = event => {
        event.preventDefault();

        // If prescription name field is empty when user submits form, show error.
        if (this.state.prescriptionName === "") {
          this.setState({
            prescriptionNameError: "Enter the name of the prescription."
          })
        }

        // If prescription doctor field is empty when user submits form, show error.
        if (this.state.prescriptionDoctor === "") {
          this.setState({
            prescriptionDoctorError: "Select the prescribing doctor from the drop-down list."
          })
        }

        // If the date prescribed field is empty when user submits form, show error.
        if (this.state.prescriptionDate === "" || this.state.prescriptionDate === "mm/dd/yyyy") {
          this.setState({
            prescriptionDateError: "Use the date picker to select the date when the prescription was prescribed."
          })
        }

        // if the prescription amount field is empty when user submits form, show error.
        if (this.state.prescriptionAmount === "") {
          this.setState({
            prescriptionAmountError: "Enter the amount prescribed."
          })
        }

        // if the prescription directions field is empty when user submits form, show error.
        if (this.state.prescriptionDirections === "") {
          this.setState({
            prescriptionDirectionsError: "Enter any verbal and/or written directions received regarding this prescription. If not applicable, enter N/A."
          })
        }

        else {
          //Save prescription to database if all fields are filled out.
          // Show form success message to user.
          PrescriptionsAPI.savePrescription({
              prescriptionName: this.state.prescriptionName,
              doctorprescribed: this.state.prescriptionDoctor,
              dateprescribed: this.state.prescriptionDate,
              amount: this.state.prescriptionAmount,
              generalinstructions: this.state.prescriptionDirections,
          })
              .then(res => this.loadPrescriptions())
              .catch(err => console.log('there is an error in saving the prescription', err));
          
          this.setState({
            formSuccessMessage: `${this.state.prescriptionName} added successfully!`,
          });
    
        // Clear form
        document.getElementById('prescription-form').reset();
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
                    Prescriptions
                  </Typography>
                </Grid>
              </Grid>

              <div className="main-content-section">
                <Grid container spacing={16}>
                  <Grid item xs={12} sm={12} md={6}>
                    <PrescriptionsForm
                      doctors={this.state.doctors}
                      handleFormSubmit={this.handleFormSubmit}
                      handlePrescriptionNameChange={this.handlePrescriptionNameChange}
                      handlePrescriptionDoctorChange={this.handlePrescriptionDoctorChange}
                      handlePrescriptionDateChange={this.handlePrescriptionDateChange}
                      handlePrescriptionAmountChange={this.handlePrescriptionAmountChange}
                      handlePrescriptionDirectionsChange={this.handlePrescriptionDirectionsChange}
                      prescriptionNameError = {this.state.prescriptionNameError}
                      prescriptionDoctorError = {this.state.prescriptionDoctorError}
                      prescriptionDateError = {this.state.prescriptionDateError}
                      prescriptionAmountError = {this.state.prescriptionAmountError}
                      prescriptionDirectionsError = {this.state.prescriptionDirectionsError} 
                      formSuccessMessage = {this.state.formSuccessMessage}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    {this.state.prescriptions.map(prescription => {
                      return (
                        <PrescriptionsList
                          id={prescription._id}
                          key={prescription._id}
                          prescriptionName={prescription.prescriptionName}
                          prescriptionDoctor={prescription.doctorprescribed}
                          prescriptionDate={prescription.dateprescribed}
                          prescriptionAmount={prescription.amount}
                          prescriptionDirections={prescription.generalinstructions}
                          deletePrescription={this.deletePrescription}
                        />
                      );
                    })}
                  </Grid>
                </Grid>
              </div>
            </div>
          </main>
       </div >
      ];
    }
  }

// Exporting the Prescriptions component so that the App.js file can use/render the My prescriptions page.
export default withStyles(styles)(Prescriptions);
