// Importing React since we are using React.
import React from 'react';
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


// this is using fushion charts


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

class ChartsWeight extends React.Component {
  
  render() {

    const { classes, logs } = this.props;
    console.log('here is the logs from chartsweight.js ' + logs);

    const weight = logs.map(log => log.weightLb);
    console.log('here is the weights array ' + weight);

    const date = logs.map(log => log.date);
    console.log('here is the dates array ' + date)
    
    // // const weightArray = [];
    // // for (let i = 0; i < weight.length; i++) {
    // //   weightArray[i] = weight[i] + (i > 0 ? weightArray[i - 1] : 0);
    // //}   

    // // const dates = Array(...{ length: (weight.length) + 1 }).map((val, i) => i + 1);

    const weightChartConfigs = {
      type: 'line',
      className: 'line',
      //  ReactJS attribute-name for DOM classes
      dataFormat: 'JSON',
      width: 850,
      height: 400,
      dataSource: {
        chart: {
          xaxisname: 'Date',
          yaxisname: "Weight (In pounds)",
          linecolor: "#008ee4",
          plotgradientcolor: "",
          bgcolor: "FFFFFF",
          showalternatehgridcolor: "0",
          divlinecolor: "#008ee4",
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
        data: [
          {
            label: date[0],
            value: weight[0],
          },
          {
            label: date[1],
            value: weight[1],
          },
          {
            label: date[2],
            value: weight[2],
          },
          {
            label: date[3],
            value: weight[3],
          },
          {
            label: date[4],
            value: weight[4],
          },
          {
            label: date[5],
            value: weight[5],
          },
        ],
      }
    }

    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Weight Chart
            </Typography>
            <ReactFC {...weightChartConfigs} />
          </CardContent>
        </Card>
      </div>
    );
  }
}


export default withStyles(styles)(ChartsWeight);
