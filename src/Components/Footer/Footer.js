//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Toolbar, NavLink, ButtonCircle, Container } from 'rebass'


//Footer component
const Footer = () => (
    <Toolbar
        bg="black">
        <Container>
            <NavLink fontSize={30} my={4}>
                HealthTracker
            </NavLink>
            <a href="https://github.com/philipstubbs13/MedLog" target="_blank">
                <ButtonCircle
                children='GitHub Repo'
                ml="auto"
                p={5}
                target="_blank"
                rel="noopener noreferrer"
                />
            </a>
        </Container>
    </Toolbar>
);

//Export the footer so that the App.js file can use/render it.
export default Footer;