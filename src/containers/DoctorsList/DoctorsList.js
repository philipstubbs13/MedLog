//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Provider, Heading, Row, Column, Box, Subhead} from 'rebass';
//Import DoctorForm
import DoctorForm from "./DoctorForm";
//Import DoctorInfo
import DoctorInfo from "./DoctorInfo";

//My Doctor List Page
const DoctorList = () => [
    <Heading
        is='h1'
        children='My doctor list'
        mt={4}
        color="white"
    />,

   <div className="main-content-section">
        <Row mt={4}>
            <Column width={1/2} >
                <DoctorForm />
            </Column>
            <Column width={1/2} ml={5}>
                <DoctorInfo />
            </Column>
        </Row>
    </div>
];

//Exporting the DoctorList component so that the App.js file can use/render the My Doctor List page.
export default DoctorList;