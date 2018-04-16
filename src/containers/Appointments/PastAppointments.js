//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Box, Container, Panel} from 'rebass';

//Past Appointments component on the Appointments page.
const PastAppointments = () => [
    <Panel color='black'>
        <Panel.Header
            color='white'
            bg='black'
            fontSize={24}>
            Past appointments
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

//Exporting the PastAppointments so that other files can use it.
export default PastAppointments;