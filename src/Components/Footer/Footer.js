//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Provider, Panel, Header, Small } from 'rebass'

//Footer component
const Footer = () => (
        <Panel.Footer p={4} fontSize={30}>
            MedTracker
        </Panel.Footer>
    
);

//Export the footer so that the App.js file can use/render it.
export default Footer;