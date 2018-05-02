// Importing React since we are using React.
import React, { Component } from "react";
// Importing UI components from rebass.
import { Container } from 'rebass';
// Importing the AppointmentsForm component.
import AppointmentsForm from './AppointmentsForm';
// Importing the AppointmentsList component.
import AppointmentsList from './AppointmentsList';
// Import API
import AppointmentAPI from '../../utils/AppointmentAPI';
import DoctorsAPI from '../../utils/DoctorsAPI';
import ClinicsAPI from '../../utils/ClinicsAPI';
// Import UI components from material-ui-next.
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
// Import Sidebar component.
import Sidebar from '../../Components/Sidebar';

//Style
const styles = theme => ({
  root: theme.mixins.gutters({
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#f44e03',
  }),
  table: {
    minWidth: 700,
    tableLayout: 'auto',
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'theme.palette.background.default',
    },
  },
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
  heading: {
    marginTop: 40,
  },
});

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

class Appointments extends Component {
  state = {
    appointmentName: "",
    appointmentDoctor: "",
    appointmentDate: "",
    appointmentTime: "",
    appointmentClinic: "",
    appointments: [],
    doctors: [],
    clinics: [],
    error: ""
  };
  // When the component mounts, load all appointments and save them to this.state.appointments.
  componentDidMount() {
    this.loadAppointments();
    this.loadDoctors();
    this.loadClinics();
  }

  // Loads all appointments and saves them to this.state.appointments.
  loadAppointments = () => {
    AppointmentAPI.getAppointments()
      .then(res =>
        this.setState({ appointments: res.data})
      )
      .catch(err => console.log(err));
  };

  // Deletes an appointment from the database with a given id, then reloads appointments from the db
  deleteAppointment = id => {
    AppointmentAPI.deleteAppointment(id)
      .then(res => this.loadAppointments())
      .catch(err => console.log(err));
  };

  //Loads all doctors and saves them to this.state.doctors.
  loadDoctors = () => {
    DoctorsAPI.getDoctors()
      .then(res =>
        this.setState({ doctors: res.data })
      )
      .catch(err => console.log('getting doctors did not work: ', err));
  };

  //Loads all clinics and saves them to this.state.clinics.
  loadClinics = () => {
    ClinicsAPI.getClinics()
      .then(res =>
        this.setState({ clinics: res.data })
      )
      .catch(err => console.log('getting clinics did not work: ', err));
  };

  // Keep track of what user enters for appointment name so that input can be grabbed later
  handleAppointmentNameChange = (event) => {
    this.setState({ appointmentName: event.target.value });
  }

  // Keep track of what user selects for doctor so that input can be grabbed later
  handleAppointmentDoctorChange = (event) => {
    this.setState({ appointmentDoctor: event.target.value });
  }

  // Keep track of what user types into appointment date input field so that input can be grabbed later
  handleAppointmentDateChange = (event) => {
    this.setState({ appointmentDate: event.target.value });
  }

  // Keep track of what user types into appointment time input field so that input can be grabbed later
  handleAppointmentTimeChange = (event) => {
    this.setState({ appointmentTime: event.target.value });
  }

  // Keep track of what user types into clinic input field so that input can be grabbed later
  handleAppointmentClinicChange = (event) => {
    this.setState({ appointmentClinic: event.target.value });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Adding appointment");
    console.log("this.state.appointmentName: ", this.state.appointmentName);
    console.log("this.state.appointmentDoctor: ", this.state.appointmentDoctor);
    console.log("this.state.appointmentDate: ", this.state.appointmentDate);
    console.log("this.state.appointmentTime: ", this.state.appointmentTime);
    AppointmentAPI.saveAppointment({
      name: this.state.appointmentName,
      doctor: this.state.appointmentDoctor,
      date: this.state.appointmentDate,
      time: this.state.appointmentTime,
    })
      .then(res => this.loadAppointments())
      .catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;
    return [
      <div className={classes.appFrame}>
        <Sidebar />
        <main className={classes.content}>
          <Container>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography variant="display1" align="left">
                  Appointments
                </Typography>
              </Grid>
            </Grid>

            <div className="main-content-section">
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Paper className={classes.root}>
                    <div className={classes.tableWrapper}>
                      <Table className={classes.table}>
                        <TableHead>
                          <TableRow>
                            <TableCell><b>Name</b></TableCell>
                            <TableCell><b>Doctor</b></TableCell>
                            <TableCell numeric><b>Date</b></TableCell>
                            <TableCell numeric><b>Time</b></TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody className={classes.tabledata}>
                          {this.state.appointments.map(appointment => {
                            return (
                              <AppointmentsList
                                id={appointment._id}
                                key={appointment._id}
                                name={appointment.name}
                                date={appointment.date}
                                time={appointment.time}
                                doctor={appointment.doctor}
                                clinic={appointment.clinic}
                                deleteAppointment={this.deleteAppointment}
                              />
                            );
                          })}
                        </TableBody>
                      </Table>
                    </div>
                  </Paper>
                </Grid>
              </Grid>

              <Grid container spacing={24} className={classes.heading}>
                <Grid item xs={12}>
                  <AppointmentsForm
                    doctors={this.state.doctors}
                    clinics={this.state.clinics}
                    handleFormSubmit={this.handleFormSubmit}
                    handleAppointmentNameChange={this.handleAppointmentNameChange}
                    handleAppointmentDoctorChange={this.handleAppointmentDoctorChange}
                    handleAppointmentDateChange={this.handleAppointmentDateChange}
                    handleAppointmentTimeChange={this.handleAppointmentTimeChange}
                    handleAppointmentClinicChange={this.handleAppointmentClinicChange}  />
                </Grid>
              </Grid>
            </div>
          </Container>
        </main>
      </div>
    ];
  }
}

// Exporting the Appointments component
// so that the App.js file can use/render the Appointments page.
export default withStyles(styles)(Appointments);
