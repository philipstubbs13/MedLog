//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Provider, Heading, Row, Column, Box, Subhead, ButtonCircle, Label, Select, Border, Text, Textarea, Input, Arrow} from 'rebass';

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
                <Box pr={3}>
                    <Subhead>
                        Add a symptom
                    </Subhead>
                    <Label mt={3} fontSize={18}>
                        Select a symptom
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Select>
                            <option></option>
                            <option>Dizzy</option>
                            <option>Shortness of Breath</option>
                            <option>Fainted</option>
                            <option>Swelling</option>
                            <option>Heart Fluttering</option>
                            <option>Fatigue</option>
                            <option>Other</option>
                        </Select>
                    </Border>

                    <Label mt={5} fontSize={18}>
                        When did the symptom occur?
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>

                    <Label mt={5} fontSize={18}>
                        Additional information to share with doctor
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Textarea
                            rows={6}
                        />
                    </Border>
                    <ButtonCircle
                        children='Add symptom'
                        bg='blue'
                        mt={4}
                    />
                </Box>
            </Column>
            <Column width={1/2} ml={5}>
                <Box pr={3}>
                    <Subhead>
                    Symptoms
                    </Subhead>
                </Box>   

                <div>
                    <Box>
                        <div> 
                            <p>Dizzy</p>
                            <p>April 14, 2018 at 7:10 a.m.</p>
                            <p>Comment about symptom</p>
                        </div>
                    </Box>
                    
                    <Box mt={5}>
                        <div>
                            <p>Shortness of breath</p>
                            <p>April 7, 2018 at 2:00 p.m.</p>
                            <p>Comment about symptom</p>
                        </div>
                    </Box>
                    
                    <Box mt={5}>
                        <div>
                            <p>Fatigue</p>
                            <p>February 19, 2018 at 6:00 p.m.</p>
                            <p>Comment about symptom</p>
                        </div>
                    </Box>
                </div>
            </Column>
        </Row>
    </div>
];

//Exporting the SymptomJournal component so that the App.js file can use/render the My Symptom Journal page.
export default SymptomJournal;