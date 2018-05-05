// yarn add react-dropzone
// import React
import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

// Please note that onDrop method will always be called regardless if dropped file was accepted or rejected. The onDropAccepted method will be called if all dropped files were accepted and the onDropRejected method will be called if any of the dropped files was rejected.
function onDrop(acceptedFiles, rejectedFiles) {
  // do stuff with files...
}


class Basic extends React.Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {
              this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
      </section>
    );
  }
}
<Basic />
