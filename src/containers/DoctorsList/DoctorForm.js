//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Provider, Container, Panel, Heading, Row, Column, Box, Subhead, ButtonCircle, Label, Select, Border, Text, Textarea, Input, Arrow} from 'rebass';

//Doctor form component on the My doctor list page.
const DoctorForm = () => [
    <Box color="white">
        <Panel color='black'>
            <Panel.Header
                color='white'
                bg='black'
                fontSize={24}>
                Add a doctor
            </Panel.Header>
                <Container>
                    <Label mt={3} fontSize={18}>
                        Select a Doctor
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
                    <Label mt={3} fontSize={18}>
                        Specialtiy
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>
                    <Label mt={3} fontSize={18}>
                        Clinic
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>
                    <Label mt={3} fontSize={18}>
                        Nurse(s)
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>

                    <Label mt={3} fontSize={18}>
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
                        children='Add Doctor'
                        bg='blue'
                        mt={4}
                        mb={4}
                    />
                </Container>
        </Panel>
    </Box>

];

export default DoctorForm;