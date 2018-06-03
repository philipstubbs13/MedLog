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
    marginTop: 30,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#33658A',
    marginBottom: 40,
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
};

class ChartsHeight extends React.Component {

  state = {
    logs: [],
    heightArray: [],
    dateArray: [],
  }
  componentDidMount() {
    this.loadLogs();
  }

  loadHeightChart(data) {
    const heightChart = new FusionCharts({
      type: 'line',
      renderAt: 'heightContainer',
      className: 'line',
      //  ReactJS attribute-name for DOM classes
      dataFormat: 'JSON',
      width: '66%',
      height: '40%',
      dataSource: {
        chart: {
          xaxisname: 'Date',
          yaxisname: "Height (In inches)",
          yAxisNamePadding: "30",
          chartTopMargin: "40",
          linecolor: "#f8bd19",
          plotgradientcolor: "",
          bgcolor: "#fcdb88",
          showalternatehgridcolor: "0", canvasPadding: "30",
          divlinecolor: "#f8bd19",
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
          anchorHoverColor: "#f8bd19",
          anchorBgColor: "",
          anchorBgHoverColor: "#f8bd19",
        },
        data: data
      }
    });
    heightChart.render();
  }

  // Loads all logs and saves them to this.state.logs.
  loadLogs = () => {
    MedLogAPI.getLogs()
      .then(res => {
        this.setState({ logs: res.data });
        console.log("here are the logs", this.state.logs);
        const data = this.state.logs.map(log => { return { label: log.date, value: log.heightIn } });
        console.log(data);
        this.loadHeightChart(data);
      })
      .catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography gutterBottom variant="headline" component="h2" className={classes.typography}>
          Height Chart
        </Typography>
        <Card className={this.props.classes.root}>
          <div id='heightContainer'></div>
        </Card>
      </div>
    );
  }
}


export default withStyles(styles)(ChartsHeight);

