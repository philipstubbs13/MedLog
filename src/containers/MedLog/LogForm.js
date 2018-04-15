//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Provider, Container, Panel, Heading, Row, Column, Box, Subhead, ButtonCircle, Label, Select, Border, Text, Textarea, Input, Arrow, Tooltip} from 'rebass';

//Symptom form component on the My symptom journal page.
const LogForm = () => [
    <Box color="white">
        <Panel color='black'>
            <Panel.Header
                color='white'
                bg='black'
                fontSize={24}>
                Add doctor notes
            </Panel.Header>
                <Container>
                    <Label mt={3} fontSize={18}>
                        Select a doctor
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Select pl={4}>
                            <option></option>
                            <option>Dr. Smith</option>
                            <option>Dr. Jones</option>
                            <option>Dr. Johnson</option>
                            <option>Dr. Pain</option>
                            <option>Dr. Somebody</option>
                        </Select>
                    </Border>

                    <Label mt={3} fontSize={18}>
                        Date of doctor visit
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>

                    <Label mt={3} fontSize={18}>
                        Select a clinic
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Select pl={4}>
                            <option></option>
                            <option>Clinic A</option>
                            <option>Clinic B</option>
                            <option>Clinic C</option>
                            <option>Clinic D</option>
                            <option>Clinic E</option>
                        </Select>
                    </Border>

                    <Label mt={3} fontSize={18}>
                        <Tooltip text='placeholder text' bg="black" color="white" fontSize={16}>
                            <Text>
                                Reason for visit <i class="fas fa-question-circle"></i>
                            </Text>
                        </Tooltip>
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>

                    <Label mt={3} fontSize={18}>
                        <Tooltip text='placeholder text' bg="black" color="white" fontSize={16}>
                            <Text>
                                Upload lab notes <i class="fas fa-question-circle"></i>
                            </Text>
                        </Tooltip>
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>

                    <Label mt={3} fontSize={18}>
                        Height
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>

                    <Label mt={3} fontSize={18}>
                        Weight
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>


                    <Label mt={3} fontSize={18}>
                        <Tooltip text='placeholder text' bg="black" color="white" fontSize={16}>
                            <Text>
                                Notes <i class="fas fa-question-circle"></i>
                            </Text>
                        </Tooltip>
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
                        children='Add notes'
                        bg='blue'
                        mt={4}
                        mb={4}
                    />
                </Container>
        </Panel>
    </Box>

];

export default LogForm;