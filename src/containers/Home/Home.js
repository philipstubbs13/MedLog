//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Provider, Heading, Row, Column, Box, Subhead, Panel} from 'rebass';
//Importing icons/images
import report from '../../assets/images/medical_report.png';
import journal from '../../assets/images/journal.png';
import appointment from '../../assets/images/appointment.png';
import prescription from '../../assets/images/prescription.png';
import doctor from '../../assets/images/doctor.png';
import search from '../../assets/images/search.png';

//Home Page
const Home = () => [
    <Heading
        is='h1'
        children='What would you like to do today?'
        mt={4}
        color= 'white'
    />,

    <div className="main-content-section">    
        <Row mt={4}>
            <Column width={1/3} >
                <Panel>
                    <Panel.Header
                    color='white'
                    bg='black'
                    align='center'
                    fontSize={24}>
                    My medical log
                    </Panel.Header>
                    <Box p={3}>
                        <Subhead align='center'>
                            <img src={report} ></img>
                        </Subhead>
                    </Box>
                </Panel>
            </Column>

            <Column width={1/3}>
                <Panel>
                    <Panel.Header
                    color='white'
                    bg='black'
                    align='center'
                    fontSize={24}>
                    My symptom journal
                    </Panel.Header>
                    <Box p={3}>
                        <Subhead align='center'>
                            <img src={journal} ></img>
                        </Subhead>
                    </Box>
                </Panel>
            </Column>

            <Column width={1/3}>
                <Panel>
                    <Panel.Header
                    color='white'
                    bg='black'
                    align='center'
                    fontSize={24}>
                    Appointments
                    </Panel.Header>
                    <Box p={3}>
                        <Subhead align='center'>
                            <img src={appointment} ></img>
                        </Subhead>
                    </Box>
                </Panel>
            </Column>
        </Row>,

        <Row mt={4} mb={5}>
            <Column width={1/3}>
                <Panel>
                    <Panel.Header
                    color='white'
                    bg='black'
                    align='center'
                    fontSize={24}>
                    My prescriptions
                    </Panel.Header>
                    <Box p={3}>
                        <Subhead align='center'>
                            <img src={prescription} ></img>
                        </Subhead>
                    </Box>
                </Panel>
            </Column>

            <Column width={1/3}>
                <Panel>
                    <Panel.Header
                    color='white'
                    bg='black'
                    align='center'
                    fontSize={24}>
                    Doctors List
                    </Panel.Header>
                    <Box p={3}>
                        <Subhead align='center'>
                            <img src={doctor} ></img>
                        </Subhead>
                    </Box>
                </Panel>
            </Column>

            <Column width={1/3}>
                <Panel>
                    <Panel.Header
                    color='white'
                    bg='black'
                    align='center'
                    fontSize={24}>
                    Search
                    </Panel.Header>
                    <Box p={3}>
                        <Subhead align='center'>
                            <img src={search} ></img>
                        </Subhead>
                    </Box>
                </Panel>
            </Column>
        </Row>
    </div>
];

//Exporting the Home component so that the App.js file can use/render the Home page.
export default Home;