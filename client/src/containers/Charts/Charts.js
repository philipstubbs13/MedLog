// Importing React since we are using React.
import React, { Component } from 'react';

// Importing UI components from rebass.
import { Container } from 'rebass';
// Import API
import MedLogAPI from '../../utils/MedLogAPI';

// Import ChartsHeight which uses chartist
import ChartsHeight from './ChartsHeight';

// Import ChartsWeight which uses chartist
import ChartsWeight from './ChartsWeight';

// Import style and components from material-ui-next.
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import Sidebar from '../../Components/Sidebar';
import ReactFC from 'react-fusioncharts';


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
  Charts: {
    marginTop: 30,
    color: 'white',
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
                <Grid item xs={11}>
                  <ChartsWeight
                  />
                </Grid>
                <Grid item xs={11}>
                  <ChartsHeight
                  />
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
