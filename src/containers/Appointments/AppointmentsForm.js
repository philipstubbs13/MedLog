//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Container, Panel, Box, ButtonCircle, Label, Select, Border, Input} from 'rebass';

//Symptom form component on the Appointments page.
const AppointmentsForm = () => [
    <Box color="white">
        <Panel color='black'>
            <Panel.Header
                color='white'
                bg='black'
                fontSize={24}>
                Add an Appointment
            </Panel.Header>
                <Container>
                    <Label mt={3} fontSize={18}>
                        Appointment name
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>

                    <Label mt={3} fontSize={18}>
                        Date
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>

                    <Label mt={3} fontSize={18}>
                        Time
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>,

                    <Label mt={3} fontSize={18}>
                        Doctor
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Select pl={4}>
                            <option></option>
                            <option>Dr. Sue King</option>
                            <option>Dr. Larry Lungs</option>
                            <option>Dr. Luna Nose</option>
                            <option>Dr. Steve Sneezy</option>
                            <option>Dr. Jerridd Stomach</option>
                            <option>Dr. Other</option>
                        </Select>
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