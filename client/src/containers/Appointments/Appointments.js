// Importing React since we are using React.
import React, { Component } from "react";
// Importing UI components from rebass.
import { Heading, Row, Column, Container } from 'rebass';
// Importing the AppointmentsForm component.
import AppointmentsForm from './AppointmentsForm';
// Importing the AppointmentsList component.
import AppointmentsList from './AppointmentsList';
// Import API
import AppointmentAPI from '../../utils/AppointmentAPI';
// Import UI components from material-ui-next.
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
// Import Sidebar component.
import Sidebar from '../../Components/Sidebar';

//Style
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 40,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#f44e03',
  }),
  table: {
    minWidth: 700,
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
    error: ""
  };
  // When the component mounts, load all appointments and save them to this.state.appointments.
  componentDidMount() {
    this.loadAppointments();
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
    console.log("this.state.appointmentClinic: ", this.state.appointmentClinic);
    AppointmentAPI.saveAppointment({
      name: this.state.appointmentName,
      doctor: this.state.appointmentDoctor,
      date: this.state.appointmentDate,
      time: this.state.appointmentTime,
      clinic: this.state.appointmentClinic,
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
            <Typography variant="display1" align="left">
              Appointments
            </Typography>

            <div className="main-content-section">
              <Row mt={4}>
                <Column width={1} >
                  <AppointmentsForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleAppointmentNameChange={this.handleAppointmentNameChange}
                    handleAppointmentDoctorChange={this.handleAppointmentDoctorChange}
                    handleAppointmentDateChange={this.handleAppointmentDateChange}
                    handleAppointmentTimeChange={this.handleAppointmentTimeChange}
                    handleAppointmentClinicChange={this.handleAppointmentClinicChange}  />
                </Column>
              </Row>

              <Row>
                <Column width={1}>
                   <Typography variant="display1" align="left">
                     Upcoming appointments
                   </Typography>
                  <Paper className={classes.root}>
                    <Table className={classes.table}>
                      <TableHead>
                        <TableRow>
                          <TableCell><b>Name</b></TableCell>
                          <TableCell><b>Doctor</b></TableCell>
                          <TableCell numeric><b>Date</b></TableCell>
                          <TableCell numeric><b>Time</b></TableCell>
                          <TableCell><b>Clinic</b></TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
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
                  </Paper>
                </Column>
              </Row>
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
