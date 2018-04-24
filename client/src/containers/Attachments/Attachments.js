// Importing React since we are using React.
import React, { Component } from "react";
// Importing UI components from rebass.
import { Heading, Row, Column } from 'rebass';
// Import AttachmentsForm
import AttachmentsForm from  './AttachmentsForm';
// Import AttachmentsList
// import AttachmentsList from './AttachmentsList';
// Import API
import AttachmentsAPI from '../../utils/AttachmentsAPI';

class Attachments extends Component {
  state = {
    attachmentDoctor: "",
    attachmentDate: "",
    attachmentSubject: "",
    attachments: [],
    error: ""
  };

    // componentDidMount() {
    //     this.loadAttachments();
    // }

    // loadAttachments = () => {
    //     AttachmentsAPI.getAttachments()
    //         .then(res =>
    //             this.setState({ attachments: res.data })
    //         )
    //         .catch(err => console.log(err));
    // };

    // Keep track of what user selects for attachment doctor so that input can be grabbed later
    handleAttachmentDoctorChange = (event) => {
        this.setState({ attachmentDoctor: event.target.value });
    }

    // Keep track of what user types for attachment date input field so that input can be grabbed later
    handleAttachmentDateChange = (event) => {
        this.setState({ attachmentDate: event.target.value });
    }

    // Keep track of what user types into attachment subject input field so that input can be grabbed later
    handleAttachmentSubjectChange = (event) => {
        this.setState({ attachmentSubject: event.target.value });
    }
 
    // When user submits attachment form, save attachment inforation to database.
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Adding attachment information");
        console.log("this.state.attachmentDoctor: ", this.state.attachmentDoctor);
        console.log("this.state.attachmentDate: ", this.state.attachmentDate);
        console.log("this.state.attachmentSubject: ", this.state.attachmentSubject);
        // AttachmentsAPI.saveLog({
        //     attachmentDoctor: this.state.attachmentDoctor,
        //     attachmentDate: this.state.attachmentDate,
        //     attachmentSubject: this.state.attachmentSubject,
        // })
        //     .then(res => this.loadAttachments())
        //     .catch(err => console.log(err));
    };

    render() {
        return [
            <Heading
                is="h1"
                children="My attachments"
                mt={4}
                color="white"
            />,

            <div className="main-content-section">
                <Row mt={4}>
                    <Column width={1 / 2} >
                        <AttachmentsForm
                            handleFormSubmit={this.handleFormSubmit}
                            handleAttachmentDoctorChange={this.handleAttachmentDoctorChange}
                            handleAttachmentDateChange={this.handleAttachmentDateChange}
                            handleAttachmentSubjectChange={this.handleAttachmentSubjectChange}/>
                    </Column>
                    <Column width={1 / 2}>
                        {/* {this.state.attachments.map(attachment => {
                            return (
                                <AttachmentsList
                                    id={attachment._id}
                                    key={attachment._id}
                                    attachmentDoctor={attachment.attachmentDoctor}
                                    attachmentDate={attachment.attachmentDate}
                                />
                            );
                        })} */}
                    </Column>
                </Row>
            </div>,
        ];
    }
}

// Exporting the Attachments component so that the App.js file can use/render the Attachments page.
export default Attachments;
