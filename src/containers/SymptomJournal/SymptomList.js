//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Provider, Heading, Row, Column, Box, Subhead, Container, Panel, ButtonCircle} from 'rebass';

//Symptom List component on My symptom journal page.
const SymptomList = () => [
    <Panel color='black' pb={3}>
        <Panel.Header
            color='white'
            bg='black'
            fontSize={24}>
            Symptoms
        </Panel.Header>
        <Container>
            <div>
                <Box>
                    <div> 
                        <p>Dizzy</p>
                        <p>April 14, 2018 at 7:10 a.m.</p>
                        <p>Comment about symptom</p>
                        <ButtonCircle
                            children='Remove'
                            bg='blue'
                        />
                    </div>
                </Box>
                
                <Box mt={5}>
                    <div>
                        <p>Shortness of breath</p>
                        <p>April 7, 2018 at 2:00 p.m.</p>
                        <p>Comment about symptom</p>
                        <ButtonCircle
                            children='Remove'
                            bg='blue'
                        />
                    </div>
                </Box>
                
                <Box mt={5}>
                    <div>
                        <p>Fatigue</p>
                        <p>February 19, 2018 at 6:00 p.m.</p>
                        <p>Comment about symptom</p>
                        <ButtonCircle
                            children='Remove'
                            bg='blue'
                        />
                    </div>
                </Box>
            </div>
        </Container>
    </Panel>

];

export default SymptomList;