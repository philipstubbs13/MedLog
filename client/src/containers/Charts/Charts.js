// Importing React since we are using React.
import React, { Component } from 'react';
// Importing UI components from rebass.
import { Container } from 'rebass';
// Import style and components from material-ui-next.
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
// Import Sidebar component.
import Sidebar from '../../Components/Sidebar';

// Style/Theme
const styles = theme => ({
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#03A9f4',
    padding: theme.spacing.unit * 3,
  },
});

class Charts extends Component {
  render() {
    const { classes } = this.props;
    return [
      <div className={classes.appFrame}>
        <Sidebar />
        <main className={classes.content}>
          <Container>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography variant="display1" align="left">
                  Charts
                </Typography>
              </Grid>
            </Grid>

            <div className="main-content-section">
              <Grid container spacing={16}>
                <Grid item xs={12} sm={12} md={6}>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                </Grid>
              </Grid>
            </div>
          </Container>
        </main>
      </div>,
    ];
  }
}

// Exporting the Charts component so that the App.js file can render the Charts page.
export default withStyles(styles)(Charts);
