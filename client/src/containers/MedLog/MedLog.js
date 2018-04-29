// Importing React since we are using React.
import React, { Component } from "react";
// Importing UI components from rebass.
import { Heading, Row, Column, Container } from 'rebass';
// Import LogForm
import LogForm from './LogForm';
// Import LogList
import LogList from './LogList';
// Import API
import MedLogAPI from '../../utils/MedLogAPI';
// Import style
import { withStyles } from 'material-ui/styles';
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
    error: ""
  };

  // When the component mounts, load all logs and save them to this.state.logs.
  componentDidMount() {
    this.loadLogs();
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

  // Keep track of what user selects from doctor drop-down list so that input can be grabbed later
  handleLogDoctorChange = (event) => {
    this.setState({ logDoctor: event.target.value });
  }

  // Keep track of what user enters into the log day input field so that input can be grabbed later
  handleLogDateChange = (event) => {
    this.setState({ logDate: event.target.value });
  }

  // Keep track of what user types into log clinic input field so that input can be grabbed later
  handleLogClinicChange = (event) => {
    this.setState({ logClinic: event.target.value });
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
    console.log("this.state.logClinic: ", this.state.logClinic);
    console.log("this.state.logVisitReason: ", this.state.logVisitReason);
    console.log("this.state.logHeight: ", this.state.logHeight);
    console.log("this.state.logWeight: ", this.state.logWeight);
    console.log("this.state.logNotes: ", this.state.logNotes);
    MedLogAPI.saveLog({
      date: this.state.logDate,
      doctor: this.state.logDoctor,
      clinic: this.state.logClinic,
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
      <div className={classes.appFrame}>
        <Sidebar />
          <main className={classes.content}>
            <Container>
              <Heading
                is="h1"
                children="My health log"
                color="white"
              />,

            <div className="main-content-section">
              <Row>
                <Column width={1 / 2} >
                  <LogForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleLogDateChange={this.handleLogDateChange}
                    handleLogDoctorChange={this.handleLogDoctorChange}
                    handleLogClinicChange={this.handleLogClinicChange}
                    handleLogVisitReasonChange={this.handleLogVisitReasonChange}
                    handleLogHeightChange={this.handleLogHeightChange}
                    handleLogWeightChange={this.handleLogWeightChange}
                    handleLogNotesChange={this.handleLogNotesChange} />
                </Column>
                  
                <Column width={1 / 2}>
                  {this.state.logs.map(log => {
                    return (
                      <LogList
                        id={log._id}
                        date={log.date}
                        doctor={log.doctor}
                        clinic={log.clinic}
                        visitPurpose={log.visitPurpose}
                        heightIn={log.heightIn}
                        weightLb={log.weightLb}
                        deleteLog={this.deleteLog}
                      />
                    );
                  })}  
                </Column>
              </Row>
            </div>
          </Container>
        </main>
      </div>,
    ];
  }
}

// Exporting the MedLog component so that the App.js file can use/render the My health log page.
export default withStyles(styles)(MedLog);
