//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Provider, Heading, Row, Column, Box, Subhead} from 'rebass';

//Symptom List component on My symptom journal page.
const SymptomList = () => [
    <Box pr={3}>
        <Subhead>
        Symptoms
        </Subhead>
    </Box>,   

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
];

export default SymptomList;