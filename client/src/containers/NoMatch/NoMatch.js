// 404 Not found page
// https://tylermcginnis.com/react-router-handling-404-pages/

// Importing React since we are using React.
import React, { Component } from 'react';
// Importing Navbar component.
import NavBar from '../../Components/AppBar';
// Importing UI components and style from material-ui-next
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
// import third-party routing library (react-router-dom)
import { Link } from 'react-router-dom';

// Styling
const styles = {
  // Tell Material-UI what's the font-size on the html element is.
  root: {
    flexGrow: 1,
  },
  headline: {
    marginTop: 30,
  },
  title: {
    marginTop: 30,
  },
  text: {
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#007AC1',
    color: 'white',
  },

};

// 404 Not Found Page
class NoMatch extends Component {
  render() {
    const { classes } = this.props;
    return [
      <NavBar />,
      <div style={{ padding: 70 }}>
        <Grid item xs={12} className={classes.headline}>
          <Grid container spacing={16} className={classes.root} justify="center">
            <Typography variant="display2" className={classes.title}>
              Oops! Something broke...
            </Typography>
          </Grid>
        </Grid>,

        <div className="main-content-section">
          <Grid item xs={12} className={classes.headline}>
            <Grid container spacing={16} className={classes.root} justify="center">
              <Typography variant="title" className={classes.title}>
                  Sorry, this page could not be found.
              </Typography>
              <Typography variant="subheading" className={classes.text}>
                There are a lot of potential reasons why this page is <a href="https://en.wikipedia.org/wiki/HTTP_404" target="_blank" rel="noopener noreferrer">404 (not found)</a>. It could be because of a mistyped URL, a faulty referral from another site, an out-of-date search engine listing, or we simply deleted a file. Don't waste your time trying to figure it out. Instead, let's get you back to the home page. To get back to the home page, click the button below.
              </Typography>
              <Button variant="raised" color="primary" className={classes.button} component={Link} to="/home">
                Take me home
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>,
    ];
  }
}

// Exporting the NoMatch component
// so that the App.js file can render the Login page.
export default withStyles(styles)(NoMatch);
