//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Provider, Container, Panel, Heading, Row, Column, Box, Subhead, ButtonCircle, Label, Select, Border, Text, Textarea, Input, Arrow} from 'rebass';

//Symptom form component on the My symptom journal page.
const SymptomForm = () => [
    <Box color="white">
        <Panel color='black'>
            <Panel.Header
                color='white'
                bg='black'
                fontSize={24}>
                Add a symptom
            </Panel.Header>
                <Container>
                    <Label mt={3} fontSize={18}>
                        Select a symptom
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Select pl={4}>
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
                        mb={4}
                    />
                </Container>
        </Panel>
    </Box>

];

export default SymptomForm;