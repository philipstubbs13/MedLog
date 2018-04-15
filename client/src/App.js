//Importing React since we are using React.
import React, { Component } from 'react';
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
import Home from "./Components/pages/Home";

//Render the components to the page.
class App extends Component {
  render() {
    return [
      <Router>
        <Container>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Footer/>
        </Container>
      </Router>
    ]
  }
}

//Exporting App component so that index.js can access it and render the components to the page.
export default App;
