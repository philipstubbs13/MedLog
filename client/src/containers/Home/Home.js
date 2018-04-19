// Importing React since we are using React.
import React from 'react';
// Importing UI components from rebass.
import { Heading, Row, Column, Box, Subhead, Link } from 'rebass';
// Importing icons/images
import report from '../../assets/images/medical_report.png';
import journal from '../../assets/images/journal.png';
import appointment from '../../assets/images/appointment.png';
import prescription from '../../assets/images/prescription.png';
import doctor from '../../assets/images/doctor.png';
import search from '../../assets/images/search.png';

// Home Page
const Home = () => [
  <Heading
    is="h1"
    children="What would you like to do today?"
    mt={4}
    color="white"
  />,

  <div className="main-content-section">
    <Row mt={4}>
      <Column width={1 / 3} >
        <Heading
          is="h1"
          children="My health log"
          mt={4}
          color="white"
          fontSize={28}
          align="center"
        />
        <Box p={3}>
          <Subhead align="center">
            <Link
              href="/log"
            >
              <img src={report} alt="clipboard" />
            </Link>
          </Subhead>
        </Box>
      </Column>

      <Column width={1 / 3} >
        <Heading
          is="h1"
          children="My symptom journal"
          mt={4}
          color="white"
          fontSize={28}
          align="center"
        />
        <Box p={3}>
          <Subhead align="center">
            <Link
              href="/symptoms"
            >
              <img src={journal} alt="health journal" />
            </Link>
          </Subhead>
        </Box>
      </Column>

      <Column width={1 / 3} >
        <Heading
          is="h1"
          children="Appointments"
          mt={4}
          color="white"
          fontSize={28}
          align="center"
        />
        <Box p={3}>
          <Subhead align="center">
            <Link
              href="/appointments"
            >
              <img src={appointment} alt="calendar" />
            </Link>
          </Subhead>
        </Box>
      </Column>
    </Row>,

    <Row mt={0}>
      <Column width={1 / 3} >
        <Heading
          is="h1"
          children="My prescriptions"
          mt={4}
          color="white"
          fontSize={28}
          align="center"
        />
        <Box p={3}>
          <Subhead align="center">
            <Link
              href="/prescriptions"
            >
              <img src={prescription} alt="prescription label" />
            </Link>
          </Subhead>
        </Box>
      </Column>

      <Column width={1 / 3} >
        <Heading
          is="h1"
          children="Doctors and clinics"
          mt={4}
          color="white"
          fontSize={28}
          align="center"
        />
        <Box p={3}>
          <Subhead align="center">
            <Link
              href="/doctors"
            >
              <img src={doctor} alt="doctor" />
            </Link>
          </Subhead>
        </Box>
      </Column>

      <Column width={1 / 3} >
        <Heading
          is="h1"
          children="Search"
          mt={4}
          color="white"
          fontSize={28}
          align="center"
        />
        <Box p={3}>
          <Subhead align="center">
            <Link
              href="/search"
            >
              <img src={search} alt="magnifying glass and folder" />
            </Link>
          </Subhead>
        </Box>
      </Column>
    </Row>
  </div>,
];

// Exporting the Home component so that the App.js file can use/render the Home page.
export default Home;
