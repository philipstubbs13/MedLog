//Importing React since we are using React.
import React from "react";
//Importing UI components from rebass.
import { Container, Panel, Box, ButtonCircle, Label, Border, Input } from 'rebass';

//Clinic form component on the Doctors and clinics page.
const ClinicForm = () => [
    <Box color="white">
        <Panel color='black'>
            <Panel.Header
                color='white'
                bg='black'
                fontSize={24}>
                Add a clinic
            </Panel.Header>
                <Container>
                    <Label mt={3} fontSize={18}>
                        Name
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>

                    <Label mt={3} fontSize={18}>
                        Street Address
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>

                    <Label mt={3} fontSize={18}>
                        City
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>

                    <Label mt={3} fontSize={18}>
                        State
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>


                    <Label mt={3} fontSize={18}>
                        Zip code
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>


                    <Label mt={3} fontSize={18}>
                        Phone number
                    </Label>
                    <Border
                        top
                        bottom
                        mt={2}>
                        <Input/>
                    </Border>

                    <ButtonCircle
                        children='Add clinic'
                        bg='blue'
                        mt={4}
                        mb={4}
                    />
                </Container>
        </Panel>
    </Box>

];

export default ClinicForm;