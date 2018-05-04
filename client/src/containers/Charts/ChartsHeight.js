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

  render() {

    const { classes, logs } = this.props;

    //console.log('here is the logs from chartsheight.js ' + logs);

    const height = logs.map(log => log.heightIn);
    console.log('here is the heights array ' + height);

    // const heightArray = [];
    // for (let i = 0; i < height.length; i++) {
    //   heightArray[i] = height[i] + (i > 0 ? heightArray[i - 1] : 0);
    //}

    const date = logs.map(log => log.date);
    console.log('here is the dates array ' + date)

    // const dates = Array(...{ length: (weight.length) + 1 }).map((val, i) => i + 1);

    const heightChartConfigs = {
      type: 'line',
      className: 'line',
      //  ReactJS attribute-name for DOM classes
      dataFormat: 'JSON',
      width: 850,
      height: 400,
      dataSource: {
        chart: {
          xaxisname: 'Date',
          yaxisname: "Height (in inches)",
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
        data: [
          {
            label: date[0],
            value: height[0],
          },
          {
            label: date[1],
            value: height[1],
          },
          {
            label: date[2],
            value: height[2],
          },
          {
            label: date[3],
            value: height[3],
          },
          {
            label: date[4],
            value: height[4],
          },
          {
            label: date[5],
            value: height[5],
          },
        ],
      }
    }

    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Height Chart
            </Typography>
            <ReactFC {...heightChartConfigs} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(ChartsHeight);
