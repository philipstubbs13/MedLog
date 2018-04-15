//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Provider, Panel, Header, Border, Toolbar, NavLink } from 'rebass'

//Navbar component
const Navbar = () => (
        <Border
            top
            bottom
        >
            <Toolbar
                bg="black">
                <NavLink fontSize={30} my={4}>
                    MedTracker
                </NavLink>
                <NavLink ml='auto' fontSize={26}>
                    <i className="fas fa-bars"></i>
                </NavLink>
            </Toolbar>
        </Border>
    
);

//Exporting the Navbar component so that the App.js file can use/render it.
export default Navbar;