//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Provider, Panel, Header } from 'rebass'

//Navbar component
const Navbar = () => (
        <Panel.Header p={4} fontSize={30}>
            MedTracker
        </Panel.Header>
    
);

//Exporting the Navbar component so that the App.js file can use/render it.
export default Navbar;