// Importing React since we are using React.
import React, { Component } from "react";
// Importing UI components from rebass.
import { Container } from 'rebass';
// Importing Navbar component.
import NavBar from '../../Components/AppBar';
// Import LogForm
import LogForm from './LogForm';
// Import LogList
import LogList from './LogList';
// Import API
import MedLogAPI from '../../utils/MedLogAPI';
import DoctorsAPI from '../../utils/DoctorsAPI';
// Import style and UI components from material-ui-next
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
    backgroundColor: '#03A9f4',
    padding: theme.spacing.unit * 3,
  },
});


class MedLog extends Component {
  state = {
    logDoctor: "",
    logDate: "",
    logClinic: "",
    logVisitReason: "",
    logHeight: "",
    logWeight: "",
    logNotes: "",
    logs: [],
    doctors: [],
    error: ""
  };

  // When the component mounts, load all logs and save them to this.state.logs.
  // When the component mounts, load all doctors and save them to this.state.doctors.
  componentDidMount() {
    this.loadLogs();
    this.loadDoctors();
  }

  // Loads all logs and saves them to this.state.logs.
  loadLogs = () => {
    MedLogAPI.getLogs()
      .then(res =>
        this.setState({ logs: res.data })
      )
      .catch(err => console.log(err));
  };

  // Deletes a log from the database with a given id, then reloads logs from the db
  deleteLog = id => {
    MedLogAPI.deleteLog(id)
      .then(res => this.loadLogs())
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

  // Keep track of what user selects from doctor drop-down list so that input can be grabbed later
  handleLogDoctorChange = (event) => {
    this.setState({ logDoctor: event.target.value });
  }

  // Keep track of what user enters into the log day input field so that input can be grabbed later
  handleLogDateChange = (event) => {
    this.setState({ logDate: event.target.value });
  }

  // Keep track of what user types into reason for visit input field so that input can be grabbed later
  handleLogVisitReasonChange = (event) => {
    this.setState({ logVisitReason: event.target.value });
  }

  // Keep track of what user types into height input field so that input can be grabbed later
  handleLogHeightChange = (event) => {
    this.setState({ logHeight: event.target.value });
  }

  // Keep track of what user types into weight input field so that input can be grabbed later
  handleLogWeightChange = (event) => {
    this.setState({ logWeight: event.target.value });
  }

  // Keep track of what user types into notes input field so that input can be grabbed later
  handleLogNotesChange = (event) => {
    this.setState({ logNotes: event.target.value });
  }

  // When user submits health log form, save health log inforation to database.
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Adding health log information");
    console.log("this.state.logDoctor: ", this.state.logDoctor);
    console.log("this.state.logDate: ", this.state.logDate);
    console.log("this.state.logVisitReason: ", this.state.logVisitReason);
    console.log("this.state.logHeight: ", this.state.logHeight);
    console.log("this.state.logWeight: ", this.state.logWeight);
    console.log("this.state.logNotes: ", this.state.logNotes);
    MedLogAPI.saveLog({
      date: this.state.logDate,
      doctor: this.state.logDoctor,
      visitPurpose: this.state.logVisitReason,
      heightIn: this.state.logHeight,
      weightLb: this.state.logWeight,
      notes: this.state.logNotes,
    })
      .then(res => this.loadLogs())
      .catch(err => console.log(err));
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
                    My health log
                  </Typography>
                </Grid>
              </Grid>
             
              <div className="main-content-section">
                <Grid container spacing={16}>
                  <Grid item xs={12} sm={12} md={6}>
                    <LogForm
                      doctors={this.state.doctors}
                      handleFormSubmit={this.handleFormSubmit}
                      handleLogDateChange={this.handleLogDateChange}
                      handleLogDoctorChange={this.handleLogDoctorChange}
                      handleLogVisitReasonChange={this.handleLogVisitReasonChange}
                      handleLogHeightChange={this.handleLogHeightChange}
                      handleLogWeightChange={this.handleLogWeightChange}
                      handleLogNotesChange={this.handleLogNotesChange} />
                  </Grid>
                      
                  <Grid item xs={12} sm={12} md={6}>
                    {this.state.logs.map(log => {
                      return (
                        <LogList
                          id={log._id}
                          date={log.date}
                          doctor={log.doctor}
                          visitPurpose={log.visitPurpose}
                          heightIn={log.heightIn}
                          weightLb={log.weightLb}
                          visitNotes={log.notes}
                          deleteLog={this.deleteLog}
                        />
                      );
                    })}  
                  </Grid>
                </Grid>
              </div>
          </Container>
        </main>
      </div>,
    ];
  }
}

// Exporting the MedLog component so that the App.js file can use/render the My health log page.
export default withStyles(styles)(MedLog);
