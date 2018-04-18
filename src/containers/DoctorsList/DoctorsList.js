// Importing React since we are using React.
import React from 'react';
// Importing UI components from rebass.
import { Heading, Row, Column } from 'rebass';
// Import DoctorForm
import DoctorForm from './DoctorForm';
// Import DoctorInfo
import DoctorInfo from './DoctorInfo';
// Import ClinicInfo
import ClinicInfo from './ClinicInfo';
// Import ClinicForm
import ClinicForm from './ClinicForm';

const newLocal = <Heading is="h1" children="Doctors and clinics" mt={4} color="white" />;
// My Doctor List Page
const DoctorList = () => [
  newLocal,

  <div className="main-content-section">
    <Row mt={4}>
      <Column width={1 / 2} >
        <DoctorForm />
      </Column>
      <Column width={1 / 2} ml={5}>
        <DoctorInfo />
      </Column>
    </Row>

    <Row mt={4}>
      <Column width={1 / 2} >
        <ClinicForm />
      </Column>
      <Column width={1 / 2} ml={5}>
        <ClinicInfo />
      </Column>
    </Row>
  </div>,
];

// Exporting the DoctorList component so that the App.js file
// can use/render the My Doctor List page.
export default DoctorList;
