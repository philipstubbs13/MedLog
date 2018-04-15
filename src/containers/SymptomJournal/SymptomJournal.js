//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Provider, Heading, Row, Column, Box, Subhead} from 'rebass';
//Import SymptomForm
import SymptomForm from "./SymptomForm.js";
//Import SymptomList
import SymptomList from "./SymptomList.js";

//My Symptom Journal Page
const SymptomJournal = () => [
    <Heading
        is='h1'
        children='My symptom journal'
        mt={4}
    />,

   <div className="main-content-section">
        <Row mt={4}>
            <Column width={1/2} >
                <SymptomForm />
            </Column>
            <Column width={1/2} ml={5}>
                <SymptomList />
            </Column>
        </Row>
    </div>
];

//Exporting the SymptomJournal component so that the App.js file can use/render the My Symptom Journal page.
export default SymptomJournal;