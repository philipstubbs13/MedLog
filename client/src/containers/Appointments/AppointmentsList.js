//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Box, Container, Panel} from 'rebass';

//Appointments List component on My Appointments page.
const AppointmentsList = () => [
    <Panel color='black'>
        <Panel.Header
            color='white'
            bg='black'
            fontSize={24}>
            Appointments
        </Panel.Header>
        <Container>
            <div>
                <Box>
                </Box>
                
                <Box mt={5}>
                </Box>
                
                <Box mt={5}>
                </Box>
            </div>
        </Container>
    </Panel>

];

export default AppointmentsList;