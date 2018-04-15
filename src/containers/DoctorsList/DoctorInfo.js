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
                <Box fontSize={1} >
                    <div> 
                        <Box mt={3} fontSize={3}>Dr. Sue King</Box>
                        <p  >Childerens Clinic</p>
                        <p>515 Delaware St SE # 6, Minneapolis, MN 55455</p>
                        <p>(949) 569-4371</p>
                    </div>
                </Box>
                
                <Box mt={5} fontSize={1}>
                    <div>
                        <Box fontSize={3}>Dr Larry Lungs</Box>
                        <p>Childerns Respertory</p>
                        <p>123 6th St. Melbourne, FL 32904</p>
                        <p>(671) 925-1352</p>
                    </div>
                </Box>
                
                <Box mt={5} fontSize={1}>
                    <div>
                        <Box fontSize={3}>Luna Nose</Box>
                        <p>Childerens ENT</p>
                        <p>4 Goldfield Rd. Honolulu, HI 96815</p>
                        <p>(125) 546-4478</p>
                    </div>
                </Box>
                <Box mt={5} fontSize={1}>
                    <div>
                        <Box fontSize={3}>Steve Sneezy</Box>
                        <p>Alergy MN</p>
                        <p>44 Shirley Ave. West Chicago, IL 60185</p>
                        <p>(251) 546-9442</p>
                    </div>
                </Box>
                <Box my={5} fontSize={1}>
                    <div>
                        <Box fontSize={3}>Jerridd Stomach</Box>
                        <p>Gasto MN</p>
                        <Box>514 S. Magnolia St. Orlando, FL 32806</Box>
                        <p>(226) 906-2721</p>
                    </div>
                </Box>
            </div>
        </Container>
    </Panel>

];

export default DoctorInfo;