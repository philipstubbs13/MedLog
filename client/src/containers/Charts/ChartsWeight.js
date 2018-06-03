// Importing React since we are using React.
import React from 'react';

// Import API
import MedLogAPI from '../../utils/MedLogAPI';

// Importing UI components from material-ui-next
import Typography from 'material-ui/Typography';
import Card from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import FusionCharts from 'fusioncharts';
// Load the charts module
import Charts from 'fusioncharts/fusioncharts.charts';
// Pass fusioncharts as a dependency of charts
Charts(FusionCharts);

// Style for add appointments form.
const styles = {
  textField: {
    marginTop: 40,
  },
  // Tell Material-UI what's the font-size on the html element is.
  typography: {
    htmlFontSize: 30,
    marginTop: 20,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#33658A',
  },
  formControl: {
    minWidth: 120,
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#007AC1',
    color: 'white',
  },
  weightContainer: {
    marginBottom: 10,
  },
};

class ChartsWeight extends React.Component {
  
  state = {
    logs: [],
    weightArray: [],
    dateArray: [],
  }
  componentDidMount() {
    this.loadLogs();
  }

  loadWeightChart(data) {
    const weightChart = new FusionCharts({
      type: 'line',
      renderAt: 'weightContainer',
      className: 'line',
      //  ReactJS attribute-name for DOM classes
      dataFormat: 'JSON',
      width: '66%',
      height: '40%',
      dataSource: {
          chart: {
            xaxisname: 'Date',
            yaxisname: "Weight (In pounds)",
            yAxisNamePadding: "30",
            chartTopMargin: "40",
            linecolor: "#008ee4",
            plotgradientcolor: "",
            bgcolor: "#86BBD8",
            showalternatehgridcolor: "0",
            divlinecolor: "#008ee4",
            showHoverEffect: "1",
            canvasPadding: "30",
            showvalues: "0",
            showcanvasborder: "1",
            canvasborderalpha: "0",
            canvasbordercolor: "CCCCCC",
            canvasborderthickness: "1",
            captionpadding: "30",
            linethickness: "3",
            legendshadow: "0",
            legendborderalpha: "0",
            palettecolors: "#f8bd19,#008ee4,#33bdda,#e44a00,#6baa01,#583e78",
            showborder: "0",
            anchorRadius: "5",
            anchorHoverRadius: "8",
            anchorHoverColor: "#008ee4",
            anchorBgColor: "",
            anchorBgHoverColor: "#008ee4",

          },
          data: data
        }
    });
    weightChart.render();
  }
  
  // Loads all logs and saves them to this.state.logs.
  loadLogs = () => {
    MedLogAPI.getLogs()
      .then(res => {
        this.setState({ logs: res.data });
        const data = this.state.logs.map(log => {return {label: log.date, value: log.weightLb}});
        this.loadWeightChart(data);
      })
      .catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography gutterBottom variant="headline" component="h2" className={classes.typography}>
          Weight Chart
        </Typography>
        <Card className={classes.root}>
          <div id='weightContainer'></div>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(ChartsWeight);
