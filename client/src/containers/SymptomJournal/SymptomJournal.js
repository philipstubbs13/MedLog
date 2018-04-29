// Importing React since we are using React.
import React, { Component } from "react";
// Importing UI components from rebass.
import { Heading, Row, Column } from 'rebass';
// Import SymptomForm
import SymptomTextFields from './SymptomForm';
// Import SymptomList
import SymptomList from './SymptomList';
// Import API
import SymptomAPI from '../../utils/SymptomAPI';
// Import UI components and styling from material-ui-next.
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
// Import Sidebar component.
import Sidebar from '../../Components/Sidebar';
// Importing UI components from rebass.
import { Container } from 'rebass';

// Style/Theme
const styles = theme => ({
  button: {
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#007AC1',
    color: 'white',
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

class SymptomJournal extends Component {
  state = {
    symptomType: "",
    symptomDay: "",
    symptomTime: "",
    symptomInfo: "",
    symptoms: [],
    error: ""
  };

  // When the component mounts, load all symptoms and save them to this.state.symptoms.
  componentDidMount() {
    this.loadSymptoms();
  }

  // Loads all symptoms and saves them to this.state.symptoms.
  loadSymptoms = () => {
    SymptomAPI.getSymptoms()
      .then(res =>
        this.setState({ symptoms: res.data, symptomDay: "", symptomTime: "", symptomInfo: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a symptom from the database with a given id, then reloads symptoms from the db
  deleteSymptom = id => {
    SymptomAPI.deleteSymptom(id)
      .then(res => this.loadSymptoms())
      .catch(err => console.log(err));
  };


  // Keep track of what user selects from symptom drop-down list so that input can be grabbed later
  handleSymptomTypeChange = (event) => {
    this.setState({ symptomType: event.target.value });
  }

  // Keep track of what user enters into the symptom day input field so that input can be grabbed later
  handleSymptomDayChange = (event) => {
    this.setState({ symptomDay: event.target.value });
  }

  // Keep track of what user types into symptom time input field so that input can be grabbed later
  handleSymptomTimeChange = (event) => {
    this.setState({ symptomTime: event.target.value });
  }

  // Keep track of what user types into symptom info input field so that input can be grabbed later
  handleSymptomInfoChange = (event) => {
    this.setState({ symptomInfo: event.target.value });
  }

  // When user submits symptom form, save symptom to database.
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Adding symptom");
    console.log("this.state.symptomType: ", this.state.symptomType);
    console.log("this.state.symptomDay: ", this.state.symptomDay);
    console.log("this.state.symptomTime: ", this.state.symptomTime);
    console.log("this.state.symptomInfo: ", this.state.symptomInfo);
    SymptomAPI.saveSymptom({
      symptomType: this.state.symptomType,
      symptomDate: this.state.symptomDay,
      symptomTime: this.state.symptomTime,
      symptomInfo: this.state.symptomInfo
    })
      .then(res => this.loadSymptoms())
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
              My symptom journal
            </Typography>

            <div className="main-content-section">
              <Row mt={4}>
                <Column width={1/2} >
                  <SymptomTextFields
                    handleFormSubmit = {this.handleFormSubmit}
                    handleSymptomTypeChange = {this.handleSymptomTypeChange}
                    handleSymptomDayChange = {this.handleSymptomDayChange}
                    handleSymptomTimeChange = {this.handleSymptomTimeChange}
                    handleSymptomInfoChange = {this.handleSymptomInfoChange} />
                </Column>
                <Column width={1/2} ml={5}>
                  {this.state.symptoms.map(symptom => {
                    return (
                      <SymptomList
                        id={symptom._id}
                        key={symptom._id}
                        type={symptom.symptomType}
                        date={symptom.symptomDate}
                        time={symptom.symptomTime}
                        info={symptom.symptomInfo}
                        deleteSymptom = {this.deleteSymptom}/>
                    );
                  })}  
                </Column>
              </Row>
            </div>
          </Container>
        </main>
      </div>
    ];
  }
}

// Exporting the SymptomJournal component
// so that the App.js file can render the My Symptom Journal page.
export default withStyles(styles)(SymptomJournal);
