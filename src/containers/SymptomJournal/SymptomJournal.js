// Importing React since we are using React.
import React from 'react';
// Importing UI components from rebass.
import { Heading, Row, Column } from 'rebass';
// Import SymptomForm
import SymptomTextFields from './SymptomForm';
// Import SymptomList
import SymptomList from './SymptomList';

// My Symptom Journal Page
const SymptomJournal = () => [
  <Heading
    is='h1'
    children="My symptom journal"
    mt={4}
    color="white"
    />,

  <div className="main-content-section">
    <Row mt={4}>
      <Column width={1/2} >
        <SymptomTextFields />
      </Column>
      <Column width={1/2} ml={5}>
        <SymptomList />
      </Column>
    </Row>
  </div>,
];

// Exporting the SymptomJournal component
// so that the App.js file can render the My Symptom Journal page.
export default SymptomJournal;