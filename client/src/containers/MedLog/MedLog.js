// Importing React since we are using React.
import React, { Component } from "react";
// Importing UI components from rebass.
import { Heading, Row, Column } from 'rebass';
// Import LogForm
import LogForm from './LogForm';
// Import LogList
import LogList from './LogList';
// Import API
import MedLogAPI from '../../utils/MedLogAPI';

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

  componentDidMount() {
    this.loadLogs();
  }

  loadLogs = () => {
    MedLogAPI.getLog()
      .then(res =>
        this.setState({ logs: res.data })
      )
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
    return [ 
      <Heading
        is="h1"
        children="My health log"
        mt={4}
        color="white"
      />,

      <div className="main-content-section">
        <Row mt={4}>
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
                  />
                );
              })}  
          </Column>
        </Row>
        <Row mt={4}>
          <Column width={1}>
            <Heading
              is="h1"
              children="Charts"
              mt={4}
              color="white"
            />
          </Column>
        </Row>
      </div>,
    ];
  }
}

// Exporting the MedLog component so that the App.js file can use/render the My health log page.
export default MedLog;
