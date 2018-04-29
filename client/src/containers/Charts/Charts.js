// Importing React since we are using React.
import React, { Component } from 'react';
// Importing UI components from rebass.
import { Row, Column, Container } from 'rebass';
// Import style and components from material-ui-next.
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
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
            <Typography variant="display1" align="left">
              Charts
            </Typography>

            <div className="main-content-section">
              <Row mt={4}>
                <Column width={1 / 2} />
                <Column width={1 / 2} />
              </Row>
            </div>
          </Container>
        </main>
      </div>,
    ];
  }
}

// Exporting the Charts component so that the App.js file can render the Charts page.
export default withStyles(styles)(Charts);
