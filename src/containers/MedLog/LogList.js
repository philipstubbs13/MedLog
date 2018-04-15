//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Provider, Heading, Row, Column, Box, Subhead, Container, Panel} from 'rebass';

//Medical Log List component on My medical log page.
const LogList = () => [
    
    <Panel color='black' mt={3}>
            <Panel.Header
                color='white'
                bg='black'
                fontSize={24}>
                Doctor notes from April 13, 2018
            </Panel.Header>
            <Box p={3}>
                    <div> 
                        <p>Doctor: </p>
                        <p>Date of doctor visit: </p>
                        <p>Clinic: </p>
                        <p>Reason for visit: </p>
                        <p>Lab notes</p>
                        <p>Height: </p>
                        <p>Weight: </p>
                    </div>
            </Box>
    </Panel>
];

export default LogList;