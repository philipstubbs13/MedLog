// Importing React since we are using React.
import React from 'react';
// Importing UI components from rebass.
import { Heading, Row, Column } from 'rebass';
// Importing the AppointmentsForm component.
import AppointmentsForm from './AppointmentsForm';
// Importing the AppointmentsList component.
import AppointmentsList from './AppointmentsList';
// Imporitng the PastAppointments component.
import PastAppointments from './PastAppointments';

const newLocal1 = <Heading is="h1" children="Appointments" mt={4} color="white" />;
const newLocal = newLocal1;
// My Appointments Page
const Appointments = () => [
  newLocal,

  <div className="main-content-section">
    <Row mt={4}>
      <Column width={1 / 2} >
        <AppointmentsForm />
      </Column>

      <Column width={1 / 2}>
        <AppointmentsList />
        <PastAppointments />
      </Column>
    </Row>
  </div>,
];

// Exporting the Appointments component
// so that the App.js file can use/render the Appointments page.
export default Appointments;
