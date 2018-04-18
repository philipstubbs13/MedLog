//Importing React since we are using React.
import React from "react";
//Importing UI components from material-ui-next.
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import PropTypes from 'prop-types';


const styles = {
  root: {
    width: 500,
  },
};

class Footer extends React.Component {
  state = {
    value: '',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange}>
        <BottomNavigationAction label="Home" value="home" showLabel="true" href="/home"/>
        <BottomNavigationAction label="My health log" value="log" showLabel="true" href="/log"/>
        <BottomNavigationAction label="My symptom journal" value="symptoms" showLabel="true" href="/symptoms"/>
        <BottomNavigationAction label="Appointments" value="appointments" showLabel="true" href="/appointments"/>
        <BottomNavigationAction label="My prescriptions" value="prescriptions" showLabel="true" href="/prescriptions"/>
        <BottomNavigationAction label="Doctors and clinics" value="doctors" showLabel="true" href="/doctors"/>
        <BottomNavigationAction label="Search" value="search" showLabel="true" href="/search"/>
      </BottomNavigation>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

//Exporting the footer/bottom navigation component with styling.
export default withStyles(styles)(Footer);
