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
// Importing UI components from rebass.
import { Container } from 'rebass';

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
    error: "",
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

    // Keep track of what user types for prescription name so that input can be grabbed later
    handlePrescriptionNameChange = (event) => {
        this.setState({ prescriptionName: event.target.value });
    }

    // Keep track of what user select for prescribing doctor input field so that input can be grabbed later
    handlePrescriptionDoctorChange = (event) => {
        this.setState({ prescriptionDoctor: event.target.value });
    }

    // Keep track of what user types into prescription date input field so that input can be grabbed later
    handlePrescriptionDateChange = (event) => {
        this.setState({ prescriptionDate: event.target.value });
    }

    // Keep track of what user types into number of tablets input field so that input can be grabbed later
    handlePrescriptionAmountChange = (event) => {
        this.setState({ prescriptionAmount: event.target.value });
    }

    // Keep track of what user types into directions for use input field so that input can be grabbed later
    handlePrescriptionDirectionsChange = (event) => {
        this.setState({ prescriptionDirections: event.target.value });
    }

    // When user submits prescription form, save prescription information to database.
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Adding prescription information");
        console.log("this.state.prescriptionName: ", this.state.prescriptionName);
        console.log("this.state.prescriptionDoctor: ", this.state.prescriptionDoctor);
        console.log("this.state.prescriptionDate: ", this.state.prescriptionDate);
        console.log("this.state.prescriptionAmount: ", this.state.prescriptionAmount);
        console.log("this.state.prescriptionDirections: ", this.state.prescriptionDirections);
        PrescriptionsAPI.savePrescription({
            prescriptionName: this.state.prescriptionName,
            doctorprescribed: this.state.prescriptionDoctor,
            dateprescribed: this.state.prescriptionDate,
            amount: this.state.prescriptionAmount,
            generalinstructions: this.state.prescriptionDirections,
        })
            .then(res => this.loadPrescriptions())
            .catch(err => console.log('there is an error in saving the prescription', err));
    };

    render() {
      const { classes } = this.props;
      return [
        <NavBar />,
        <div className={classes.appFrame}>
          <Sidebar />
          <main className={classes.content}>
            <Container>
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
                      handlePrescriptionDirectionsChange={this.handlePrescriptionDirectionsChange} />
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
            </Container>
          </main>
       </div >
      ];
    }
  }

// Exporting the Prescriptions component so that the App.js file can use/render the My prescriptions page.
export default withStyles(styles)(Prescriptions);
