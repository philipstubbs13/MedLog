//Importing React since we are using React.
import React, { Component } from 'react';
//Importing React Router to add page routes.
import { BrowserRouter as Router, Route } from "react-router-dom";
//Importing UI components from rebass.
import { Provider, Container} from 'rebass';
//Importing app logo.
import logo from './logo.svg';
//Importing css 
import './App.css';
//Importing Navbar component.
import Navbar from "./Components/Navbar";
//Importing Footer component.
import Footer from "./Components/Footer";
//Importing Home page component.
import Home from "./containers/Home";
//Importing the My Symptom Journal page component.
import SymptomJournal from "./containers/SymptomJournal"
//Importing the My Medical Log page component.
import MedLog from "./containers/MedLog"

//Render the components to the page.
class App extends Component {
  render() {
    return [
      <Navbar />,
      <Router>
        <Container>
          <Route exact path="/" component={Home} />
          <Route exact path="/symptoms" component={SymptomJournal} />
          <Route exact path="/log" component={MedLog} />
        </Container>
      </Router>,
      <Footer/>
    ]
  }
}

//Exporting App component so that index.js can access it and render the components to the page.
export default App;
