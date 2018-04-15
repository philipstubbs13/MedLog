//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Provider, Container, Panel, Heading, Row, Column, Box, Subhead, ButtonCircle, Label, Select, Border, Text, Textarea, Input, Arrow} from 'rebass';

//Symptom form component on the Appointments page.
const AppointmentsForm = () => [
    <Box color="white">
        <Panel color='black'>
            <Panel.Header
                color='white'
                bg='black'
                fontSize={24}>
                Add a Appointments
            </Panel.Header>
                <Container>
                    <Label mt={3} fontSize={18}>
                        Select a Appointments
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
                        When did the Appointments?
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>

                    <Label mt={5} fontSize={18}>
                        Additional Appointments information
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
                        children='Add Appointment'
                        bg='blue'
                        mt={4}
                        mb={4}
                    />
                </Container>
        </Panel>
    </Box>

];

export default AppointmentsForm;