//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Provider, Heading, Row, Column, Box, Subhead, Container, Panel} from 'rebass';

//Doctor Info component on My doctor list page.
const DoctorInfo = () => [
    <Panel color='black'>
        <Panel.Header
            color='white'
            bg='black'
            fontSize={24}>
            Doctor
        </Panel.Header>
        <Container>
            <div>
                <Box>
                    <div> 
                        <p>Dr. Sue King</p>
                    </div>
                </Box>
                
                <Box mt={5}>
                    <div>
                        <p>Dr Larry Lungs</p>
                    </div>
                </Box>
                
                <Box mt={5}>
                    <div>
                        <p>Luna Nose</p>
                    </div>
                </Box>
                <Box mt={5}>
                    <div>
                        <p>Steve Sneezy</p>
                    </div>
                </Box>
                <Box mt={5}>
                    <div>
                        <p>Jerridd Stomach</p>
                    </div>
                </Box>
            </div>
        </Container>
    </Panel>

];

export default SymptomList;