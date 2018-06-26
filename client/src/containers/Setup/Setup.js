// // Importing React since we are using React.
// import React, { Component } from 'react';
// // Importing UI components from rebass.
// import { Container } from 'rebass';
// // Import UI components from material-ui-next.
// import { withStyles } from 'material-ui/styles';
// import Grid from 'material-ui/Grid';
// import Typography from 'material-ui/Typography';
// import Card, { CardActions, CardContent } from 'material-ui/Card';
// import Button from 'material-ui/Button';
// import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
// import PropTypes from 'prop-types';
// import Paper from 'material-ui/Paper';
// // import third-party routing library (react-router-dom)
// import { Link } from 'react-router-dom';
// // Importing the DoctorList page component.
// import ClinicForm from '../DoctorsList/ClinicForm';
// import ClinicInfo from '../DoctorsList/ClinicInfo';
// import DoctorForm from '../DoctorsList/DoctorForm';
// import DoctorInfo from '../DoctorsList/DoctorInfo';
// // Import API
// import DoctorsAPI from '../../utils/DoctorsAPI';
// import ClinicsAPI from '../../utils/ClinicsAPI';

// const styles = {
//   root: {
//     flexGrow: 1,
//     marginTop: 30,
//   },
//   headline: {
//     marginTop: 30,
//   },
//   steps: {
//     borderStyle: 'solid',
//     borderWidth: 4,
//     borderColor: '#007AC1',
//   },
//   button: {
//     marginTop: 20,
//     marginRight: 20,
//     padding: 15,
//     backgroundColor: '#007AC1',
//     color: 'white',
//   },
//   doctorClinicList: {
//     borderStyle: 'solid',
//     borderWidth: 4,
//     borderColor: '#f44e03',
//   },
// };

// function getSteps() {
//     return ['Add clinics', 'Add doctors', 'Setup complete'];
// }

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return (
//         <Grid container spacing={16} style={{marginTop: 30}}>
//           <Grid item xs={12} sm={12} md={6}>
//             <ClinicForm />
//           </Grid>
//           <Grid item xs={12} sm={12} md={6}>
//             <div>
//               <Paper elevation={4}>
//                 <Typography gutterBottom variant="headline" component="h2" style={{textAlign: 'center'}}>
//                   Clinics
//                 </Typography>
//               </Paper>
//             </div>
//           </Grid>
//         </Grid>
//       );
//     case 1:
//       return (
//         <Grid container spacing={16} style={{marginTop: 30}}>
//           <Grid item xs={12} sm={12} md={6}>
//             <ClinicForm />
//           </Grid>
//           <Grid item xs={12} sm={12} md={6}>
//             <div>
//               <Paper elevation={4}>
//                 <Typography gutterBottom variant="headline" component="h2" style={{textAlign: 'center'}}>
//                   Clinics
//                 </Typography>
//               </Paper>
//             </div>
//           </Grid>
//         </Grid>
//       );
//     case 2:
//       return 'This is the bit I really care about!';
//     default:
//       return 'Unknown step';
//   }
// }

// class SetupDoctorStepper extends React.Component {
//   state = {
//     doctorFirstName: "",
//     doctorLastName: "",
//     doctorClinic: "",
//     doctorPhone: "",
//     doctors: [],
//     clinicName: "",
//     clinicAddress: "",
//     clinicCity: "",
//     clinicState: "",
//     clinicZip: "",
//     clinicPhone: "",
//     clinics: [],
//     error: ""
//   };

//   // When the component mounts, load all doctors and clinics and save them to this.state.doctors and this.state.clinics.
//   componentDidMount() {
//     this.loadDoctors();
//     this.loadClinics();
//   }

// //for rendering doctors list 
//   loadDoctors = () => {
//     DoctorsAPI.getDoctors()
//       .then(res =>
//         this.setState({ doctors: res.data }))
//       .catch(err => console.log('there is an issue loading doctors: ' + err));
//   };

//   // Loads all clinics and saves them to this.state.clinics.
//   loadClinics = () => {
//     ClinicsAPI.getClinics()
//       .then(res =>
//         this.setState({ clinics: res.data }))
//       .catch(err => console.log('there is an issue loading doctors: ' + err));
//   };

//   // Deletes a doctor from the database with a given id, then reloads doctors from the db
//   deleteDoctor = id => {
//     DoctorsAPI.deleteDoctor(id)
//       .then(res => this.loadDoctors())
//       .catch(err => console.log(err));
//   };

//   // Deletes a clinic from the database with a given id, then reloads clinics from the db
//   deleteClinic = id => {
//     ClinicsAPI.deleteClinic(id)
//       .then(res => this.loadClinics())
//       .catch(err => console.log(err));
//   };

//   // Keep track of what user enters for doctor first name so that input can be grabbed later
//   handleDoctorFirstNameChange = (event) => {
//     this.setState({ doctorFirstName: event.target.value });
//   }

//   // Keep track of what user enters for doctor last name so that input can be grabbed later
//   handleDoctorLastNameChange = (event) => {
//     this.setState({ doctorLastName: event.target.value });
//   }

//   // Keep track of what user types into clinic input field so that input can be grabbed later
//   handleDoctorClinicChange = (event) => {
//     this.setState({ doctorClinic: event.target.value });
//   }

//   // Keep track of what user types into phone input field so that input can be grabbed later
//   handleDoctorPhoneChange = (event) => {
//     this.setState({ doctorPhone: event.target.value });
//   }

//     // Keep track of what user enters for clinic name so that input can be grabbed later
//   handleClinicNameChange = (event) => {
//     console.log("inside handle clinic name chang", event);
//     this.setState({ clinicName: event.target.value });
//   }

//   // Keep track of what user enters for clinic address so that input can be grabbed later
//   handleClinicAddressChange = (event) => {
//     this.setState({ clinicAddress: event.target.value });
//   }

//   // Keep track of what user types into clinic city field so that input can be grabbed later
//   handleClinicCityChange = (event) => {
//     this.setState({ clinicCity: event.target.value });
//   }

//   // Keep track of what user types into clinic state field so that input can be grabbed later
//   handleClinicStateChange = (event) => {
//     this.setState({ clinicState: event.target.value });
//   }

//    // Keep track of what user types into zip code field so that input can be grabbed later
//   handleClinicZipChange = (event) => {
//     this.setState({ clinicZip: event.target.value });
//   }

//   // Keep track of what user types into phone input field so that input can be grabbed later
//   handleClinicPhoneChange = (event) => {
//     this.setState({ clinicPhone: event.target.value });
//   }

//   // When user submits doctor form, save doctor to database.
//   handleDoctorFormSubmit = event => {
//     event.preventDefault();
//     console.log('inside handleDoctorFormSubmit! ', event)
//     console.log("Adding doctor - done in doctorslist.js");
//     console.log("this.state.doctorFirstName: ", this.state.doctorFirstName);
//     console.log("this.state.doctorLastName: ", this.state.doctorLastName);
//     console.log("this.state.doctorClinic: ", this.state.doctorClinic);
//     console.log("this.state.doctorPhone: ", this.state.doctorPhone);
//     DoctorsAPI.saveDoctor({
//       firstname: this.state.doctorFirstName,
//       lastname: this.state.doctorLastName,
//       clinic: this.state.doctorClinic,
//       phone: this.state.doctorPhone,
//     })
//       .then(res => this.loadDoctors())
//       .catch(err => console.log('there is a problem saving doctor: ' + err));
//   };

//   // When user submits clinic form, save clinic to database.
//   handleClinicFormSubmit = event => {
//     event.preventDefault();
//     console.log("Adding clinic");
//     console.log("this.state.clinicName: ", this.state.clinicName);
//     console.log("this.state.clinicAddress: ", this.state.clinicAddress);
//     console.log("this.state.clinicCity: ", this.state.clinicCity);
//     console.log("this.state.clinicState: ", this.state.clinicState);
//     console.log("this.state.clinicZip: ", this.state.clinicZip);
//     console.log("this.state.clinicPhone: ", this.state.clinicPhone);
//     ClinicsAPI.saveClinic({
//       clinicname: this.state.clinicName,
//       address: this.state.clinicAddress,
//       city: this.state.clinicCity,
//       state: this.state.clinicState,
//       zip: this.state.clinicZip,
//       phone: this.state.clinicPhone,
//     })
//       .then(res => this.loadClinics())
//       .catch(err => console.log('there is a problem saving doctor: ' + err));
//   };
//   static propTypes = {
//     classes: PropTypes.object,
//   };

//   state = {
//     activeStep: 0,
//       skipped: new Set(),
//   };

//   isStepOptional = step => {
//     return step === 3;
//   };

//   isStepSkipped(step) {
//     return this.state.skipped.has(step);
//   }

//   handleNext = () => {
//     const { activeStep } = this.state;
//     let { skipped } = this.state;
//     if (this.isStepSkipped(activeStep)) {
//       skipped = new Set(skipped.values());
//       skipped.delete(activeStep);
//     }
//     this.setState({
//       activeStep: activeStep + 1,
//       skipped,
//     });
//   };

//   handleBack = () => {
//     const { activeStep } = this.state;
//     this.setState({
//       activeStep: activeStep - 1,
//     });
//   };

//   handleSkip = () => {
//     const { activeStep } = this.state;
//     if (!this.isStepOptional(activeStep)) {
//       // You probably want to guard against something like this,
//       // it should never occur unless someone's actively trying to break something.
//       throw new Error("You can't skip a step that isn't optional.");
//     }
//     const skipped = new Set(this.state.skipped.values());
//     skipped.add(activeStep);
//     this.setState({
//       activeStep: this.state.activeStep + 1,
//       skipped,
//     });
//   };

//   handleReset = () => {
//     this.setState({
//       activeStep: 0,
//     });
//   };

//   render() {
//     const { classes } = this.props;
//     const steps = getSteps();
//     const { activeStep } = this.state;

//     return [
//       <Container>,
//         <div className="main-content-section">
//           <Grid item xs={12} sm={12} className={classes.headline}>
//             <Grid container spacing={24} className={classes.root} justify="center">
//             <Typography variant="display1" align="center">
//                 Set up doctors and clinics
//             </Typography>
//             </Grid>
//           </Grid>

//           <Grid container spacing={24} className={classes.root} justify="center" alignItems="center">
//             <Grid item xs={12}>
//               <div className={classes.root}>
//                 <Stepper activeStep={activeStep} className={classes.steps}>
//                   {steps.map((label, index) => {
//                     const props = {};
//                     const labelProps = {};
//                     if (this.isStepOptional(index)) {
//                       labelProps.optional = <Typography variant="caption">Optional</Typography>;
//                     }
//                     if (this.isStepSkipped(index)) {
//                       props.completed = false;
//                     }
//                     return (
//                       <Step key={label} {...props}>
//                         <StepLabel {...labelProps}>{label}</StepLabel>
//                       </Step>
//                     );
//                   })}
//                 </Stepper>
//                     <div>
//                     {activeStep === steps.length ? (
//                         <div>
//                           <Typography className={classes.instructions}>
//                               Your doctors and clinics have been added. Setup is complete!
//                           </Typography>
//                           <Button 
//                             onClick = {this.handleReset} 
//                             className = {classes.button} 
//                             component = {Link} to = "/home"
//                             variant="raised"
//                             color="primary">
//                             Continue to Home page
//                           </Button>
//                         </div>
//                     ) : (
//                         <div>
//                         <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
//                         <div>
//                             <Button
//                             disabled={activeStep === 0}
//                             onClick={this.handleBack}
//                             className={classes.button}
//                             >
//                             Back
//                             </Button>

//                             <Button
//                             variant="raised"
//                             color="primary"
//                             onClick={this.handleNext}
//                             className={classes.button}
//                             >
//                             {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//                             </Button>
//                         </div>
//                         </div>
//                     )}
//                     </div>
//                 </div>
//             </Grid>
//           </Grid>
//         </div>,
//       </Container>,
//     ];
//   }
// }

// // Exporting the Home component so that the App.js file can render the Home page.
// export default withStyles(styles)(SetupDoctorStepper);