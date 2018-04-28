// Importing React since we are using React.
import React, { Component } from "react";
// Importing UI components from rebass.
import { Heading, Row, Column } from 'rebass';
// Import PrescriptionsForm
import PrescriptionsForm from  './PrescriptionsForm';
// Import PrescriptionsList
import PrescriptionsList from './PrescriptionsList';
// Import API
import PrescriptionsAPI from '../../utils/PrescriptionsAPI';
// Import style from material-ui-next
import { withStyles } from 'material-ui/styles';
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
        backgroundColor: '#03A9f4',
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
    error: ""
  };

    // When the component mounts, load all prescriptions and save them to this.state.prescriptions.
    componentDidMount() {
        this.loadPrescriptions();
    }

    // Loads all prescriptions and saves them to this.state.prescriptions.
    loadPrescriptions = () => {
        PrescriptionsAPI.getPrescriptions()
            .then(res =>
                this.setState({ prescriptions: res.data })
            )
            .catch(err => console.log(err));
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
            .catch(err => console.log(err));
    };

    render() {
      const { classes } = this.props;
      return [
        <div className={classes.appFrame}>
          <Sidebar />
          <main className={classes.content}>
            <Container>
              <Heading
                is="h1"
                children="My prescriptions"
                color="white"
              />,

              <div className="main-content-section">
                <Row>
                  <Column width={1 / 2} >
                    <PrescriptionsForm
                      handleFormSubmit={this.handleFormSubmit}
                      handlePrescriptionNameChange={this.handlePrescriptionNameChange}
                      handlePrescriptionDoctorChange={this.handlePrescriptionDoctorChange}
                      handlePrescriptionDateChange={this.handlePrescriptionDateChange}
                      handlePrescriptionAmountChange={this.handlePrescriptionAmountChange}
                      handlePrescriptionDirectionsChange={this.handlePrescriptionDirectionsChange} />
                  </Column>
                  <Column width={1 / 2}>
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
                  </Column>
                </Row>
              </div>
            </Container>
          </main>
       </div >
      ];
    }
  }

// Exporting the Prescriptions component so that the App.js file can use/render the My prescriptions page.
export default withStyles(styles)(Prescriptions);
