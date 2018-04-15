//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Provider, Small, Border, Toolbar, NavLink, ButtonCircle, Container } from 'rebass'


//Footer component
const Footer = () => (
        <Border
            top
            bottom
        >
            <Toolbar
                bg="black">
                <Container>
                    <NavLink fontSize={30} my={4}>
                        MedTracker
                    </NavLink>
                    <ButtonCircle
                    children='GitHub Repo'
                    ml="auto"
                    p={5}
                    />
                </Container>
            </Toolbar>
        </Border>
    
);

//Export the footer so that the App.js file can use/render it.
export default Footer;