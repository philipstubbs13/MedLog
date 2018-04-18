import React from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';

class HamburgerMenu extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <div>
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick} raised size="large"
                >
                    <i class="fas fa-bars"></i>
                </Button>
                <Menu
                    id="hamburger-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <a href="/home" style={{ textDecoration: 'none' }}><MenuItem onClick={this.handleClose}>Home</MenuItem></a>
                    <a href="/log" style={{ textDecoration: 'none' }}><MenuItem onClick={this.handleClose}>My health log</MenuItem></a>
                    <a href="/symptoms" style={{ textDecoration: 'none' }}><MenuItem onClick={this.handleClose}>My symptom journal</MenuItem></a>
                    <a href="/appointments" style={{ textDecoration: 'none' }}><MenuItem onClick={this.handleClose}>Appointments</MenuItem></a>
                    <a href="/prescriptions" style={{ textDecoration: 'none' }}><MenuItem onClick={this.handleClose}>My prescriptions</MenuItem></a>
                    <a href="/doctors" style={{ textDecoration: 'none' }}><MenuItem onClick={this.handleClose}>Doctors and clinics</MenuItem></a>
                    <a href="/search" style={{ textDecoration: 'none' }}><MenuItem onClick={this.handleClose}>Search</MenuItem></a>
                    <a href="/" style={{ textDecoration: 'none' }}><MenuItem onClick={this.handleClose}>Logout</MenuItem></a>
                </Menu>
            </div>
        );
    }
}

export default HamburgerMenu;
