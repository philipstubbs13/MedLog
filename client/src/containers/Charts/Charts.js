// Importing React since we are using React.
import React, { Component } from "react";
// Importing UI components from rebass.
import { Heading, Row, Column } from 'rebass';
// Import API


class Charts extends Component {

  render() {
    return [
      <Heading
        is="h1"
        children="Charts"
        mt={4}
        color="white"
      />,

      <div className="main-content-section">
        <Row mt={4}>
          <Column width={1 / 2} >

          </Column>
          <Column width={1 / 2}>

          </Column>
        </Row>
      </div>,
    ];
  }
}

// Exporting the Charts component so that the App.js file can render the Charts page.
export default Charts;
