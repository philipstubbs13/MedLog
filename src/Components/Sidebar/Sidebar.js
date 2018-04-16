//Importing React since we are using React.
import React from "react";
import Sidebar from 'grommet/components/Sidebar';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';
import Header from 'grommet/components/Header';

//Sidebar component
const SideBar = () => (
    <Sidebar colorIndex='neutral-1'>
        <Header pad='medium'
            justify='between'>
            <Title>
            Title
            </Title>
        </Header>
        <Box flex='grow'
            justify='start'>
            <Menu primary={true}>
            <Anchor href='/'
                className='active'>
                Home
            </Anchor>
            <Anchor href='/log'>
                My health log
            </Anchor>
            <Anchor href='/symptoms'>
                My symptom journal
            </Anchor>
            </Menu>
        </Box>
    </Sidebar>
 );

//Exporting the Sidebar component so that the App.js file can use/render it.
export default SideBar;