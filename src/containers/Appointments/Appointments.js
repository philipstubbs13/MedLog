//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Heading, Row, Column } from 'rebass';
//Importing the AppointmentsForm component.
import AppointmentsForm from "./AppointmentsForm.js";
//Importing the AppointmentsList component.
import AppointmentsList from "./AppointmentsList.js";
//Imporitng the PastAppointments component.
import PastAppointments from "./PastAppointments.js";

//My Appointments Page
const Appointments = () => [
    <Heading
        is='h1'
        children='Appointments'
        mt={4}
        color="white"
    />,

   <div className="main-content-section">
        <Row mt={4}>
            <Column width={1} >
                <AppointmentsForm />
            </Column>
        </Row>

        <Row mt={4}>
            <Column width={1/2}>
                <AppointmentsList />
            </Column>

            <Column width={1/2}>
                <PastAppointments />
            </Column>
        </Row>
    </div>
];

//Exporting the SymptomJournal component so that the App.js file can use/render the My Symptom Journal page.
export default Appointments;