//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Provider, Heading, Row, Column, Box, Subhead, Container, Panel} from 'rebass';

//Appointments List component on My Appointments page.
const SymptomList = () => [
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
                    <div> 
                        <p>Dizzy</p>
                        <p>April 14, 2018 at 7:10 a.m.</p>
                        <p>Comment about symptom</p>
                    </div>
                </Box>
                
                <Box mt={5}>
                    <div>
                        <p>Shortness of breath</p>
                        <p>April 7, 2018 at 2:00 p.m.</p>
                        <p>Comment about symptom</p>
                    </div>
                </Box>
                
                <Box mt={5}>
                    <div>
                        <p>Fatigue</p>
                        <p>February 19, 2018 at 6:00 p.m.</p>
                        <p>Comment about symptom</p>
                    </div>
                </Box>
            </div>
        </Container>
    </Panel>

];

export default AppointmentsList;