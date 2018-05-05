// Importing React since we are using React.
import React from 'react';

// Import API
import MedLogAPI from '../../utils/MedLogAPI';

// Importing UI components from material-ui-next
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
// Load the charts module
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
// Pass fusioncharts as a dependency of charts
Charts(FusionCharts);

// Style for add appointments form.
const styles = {
  textField: {
    marginTop: 40,
  },
  // Tell Material-UI what's the font-size on the html element is.
  typography: {
    htmlFontSize: 40,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#007AC1',
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
    console.log("I got to the charts area");
    console.log(data);
    const heightChart = new FusionCharts({
      type: 'line',
      renderAt: 'abcdContainer',
      className: 'line',
      //  ReactJS attribute-name for DOM classes
      dataFormat: 'JSON',
      width: 850,
      height: 400,
      dataSource: {
        chart: {
          xaxisname: 'Date',
          yaxisname: "Height (In inches)",
          linecolor: "#f8bd19",
          plotgradientcolor: "",
          bgcolor: "FFFFFF",
          showalternatehgridcolor: "0",
          divlinecolor: "#f8bd19",
          showvalues: "0",
          showcanvasborder: "0",
          canvasborderalpha: "0",
          canvasbordercolor: "CCCCCC",
          canvasborderthickness: "1",
          captionpadding: "30",
          linethickness: "3",
          legendshadow: "0",
          legendborderalpha: "0",
          palettecolors: "#f8bd19,#008ee4,#33bdda,#e44a00,#6baa01,#583e78",
          showborder: "0",
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

    return (
      <div>
        <Card className={this.props.classes.root}>
          <div id='abcdContainer'></div>
        </Card>
      </div>
    );
  }
}


export default withStyles(styles)(ChartsHeight);

