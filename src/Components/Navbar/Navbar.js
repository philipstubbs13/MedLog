//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Provider, Panel, Header, Border, Toolbar, NavLink, Container } from 'rebass'
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';


//Navbar component
const Navbar = () => (
    <Toolbar
        bg="black">
        <Container>
            <NavLink fontSize={35} my={4}>
                MedTracker
            </NavLink>
        </Container>
    </Toolbar>
 
 );

//Exporting the Navbar component so that the App.js file can use/render it.
export default Navbar;