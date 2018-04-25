// Importing React since we are using React.
import React from 'react';
// Importing UI components from rebass.
import { Box, Container, Panel } from 'rebass';

// ClinicInfo component on the My doctors and clinics page.
const ClinicInfo = () => [
    <Panel color="black">
        <Panel.Header
            color='white'
            bg='black'
            fontSize={24}>
            Medical clinics
        </Panel.Header>
        <Container>
            <div>
                <Box fontSize={1} >

                </Box>
                
                <Box mt={5} fontSize={1}>

                </Box>
                
                <Box mt={5} fontSize={1}>

                </Box>
                <Box mt={5} fontSize={1}>

                </Box>
            </div>
        </Container>
    </Panel>

];

// Exporting the ClinicInfo component so that we can display clinics
// on the doctors and clinics page.
export default ClinicInfo;