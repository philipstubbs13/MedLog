// Importing React since we are using React.
import React, { Component } from 'react';
// Importing UI components from rebass.
import { Heading, Row, Column, Container } from 'rebass';
// Import style from material-ui-next.
import { withStyles } from 'material-ui/styles';
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
            <Heading
              is="h1"
              children="Charts"
              color="white"
            />,

            <div className="main-content-section">
              <Row>
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
