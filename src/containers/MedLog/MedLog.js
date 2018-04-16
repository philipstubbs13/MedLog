//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Heading, Row, Column} from 'rebass';
//Import LogForm
import LogForm from "./LogForm.js";
//Import LogList
import LogList from "./LogList.js";

//My medical log page.
const MedLog = () => [
    <Heading
        is='h1'
        children='My health log'
        mt={4}
        color="white"
    />,

   <div className="main-content-section">
        <Row mt={4}>
            <Column width={1} >
                <LogForm />
            </Column>
        </Row>
        <Row mt={4}>
            <Column width={1/2}>
                <Heading
                    is='h1'
                    children='My notes'
                    mt={4}
                    color="white"
                />
                <LogList/>
            </Column>
            <Column width={1/2} ml={5}>
                <Heading
                    is='h1'
                    children='Charts'
                    mt={4}
                    color="white"
                />
            </Column>
        </Row>
    </div>
];

//Exporting the MedLog component so that the App.js file can use/render the My health log page.
export default MedLog;