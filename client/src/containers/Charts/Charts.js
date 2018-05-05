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
});

class Charts extends Component {
    // state = {
    //   logs: [],
    //   error: "",
    // };
    // // When the component mounts, load all medlogs and save them to this.state.appointments.
    // componentDidMount() {
    //   this.loadLogs();

    // }

    // Loads all logs and saves them to this.state.logs.
    loadLogs = () => {
      MedLogAPI.getLogs()
        .then(res =>
          this.setState({ logs: res.data }, 
          function() {logs => console.log('logging from charts.js ' + logs)})
        )
        .catch(err => console.log(err));
    };

  // loadWeights= (logs) => {
  //   const weights = logs.map(log => log.weightLb);
  // };  

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
                <Grid item xs={12} sm={12} md={12}>
                  <Typography gutterBottom variant="headline" component="h2">
                    Weight Chart
                  </Typography>
                  <ChartsWeight
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Typography gutterBottom variant="headline" component="h2">
                    Height Chart
                  </Typography>
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
