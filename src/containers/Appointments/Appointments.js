//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Provider, Heading, Row, Column, Box, Subhead} from 'rebass';
//Import SymptomForm
import AppointmentsForm from "./AppointmentsForm.js";
//Import SymptomList
import AppointmentsList from "./AppointmentsList.js";

//My Appointments Page
const Appointments = () => [
    <Heading
        is='h1'
        children='My Appointments'
        mt={4}
        color="white"
    />,

   <div className="main-content-section">
        <Row mt={4}>
            <Column width={1/2} >
                <AppointmentsForm />
            </Column>
            <Column width={1/2} ml={5}>
                <AppointmentsList />
            </Column>
        </Row>
    </div>
];

//Exporting the SymptomJournal component so that the App.js file can use/render the My Symptom Journal page.
export default Appointments;