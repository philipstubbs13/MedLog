// // Importing React since we are using React.
// import React, { Component } from "react";
// // Importing UI components from rebass.
// import { Container } from 'rebass';
// Import AttachmentsForm
// import AttachmentsForm from  './AttachmentsForm';

// // s3 testing
// // import TestAttachmentsForm from  './TestAttachmentsForm';
// // import TestAttachments from  './TestAttachments';
// // Import AttachmentsList
// // import AttachmentsList from './AttachmentsList';
// // Import API
// // import AttachmentsAPI from '../../utils/AttachmentsAPI';
// // import style from material-ui-next.
// import { withStyles } from 'material-ui/styles';
// import Typography from 'material-ui/Typography';
// import Grid from 'material-ui/Grid';
// // Import Sidebar component.
// import Sidebar from '../../Components/Sidebar';

// // Style/Theme
// const styles = theme => ({
//   appFrame: {
//     zIndex: 1,
//     overflow: 'hidden',
//     position: 'relative',
//     display: 'flex',
//     width: '100%',
//   },
//   content: {
//     flexGrow: 1,
//     backgroundColor: '#03A9f4',
//     padding: theme.spacing.unit * 3,
//   },
// });

// class Attachments extends Component {
//   state = {
//     attachmentDoctor: "",
//     attachmentDate: "",
//     attachmentSubject: "",
//     attachments: [],
//     error: ""
//   };

//     // componentDidMount() {
//     //     this.loadAttachments();
//     // }

//     // loadAttachments = () => {
//     //     AttachmentsAPI.getAttachments()
//     //         .then(res =>
//     //             this.setState({ attachments: res.data })
//     //         )
//     //         .catch(err => console.log(err));
//     // };

//     // Keep track of what user selects for attachment doctor so that input can be grabbed later
//     handleAttachmentDoctorChange = (event) => {
//         this.setState({ attachmentDoctor: event.target.value });
//     }

//     // Keep track of what user types for attachment date input field so that input can be grabbed later
//     handleAttachmentDateChange = (event) => {
//         this.setState({ attachmentDate: event.target.value });
//     }

//     // Keep track of what user types into attachment subject input field so that input can be grabbed later
//     handleAttachmentSubjectChange = (event) => {
//         this.setState({ attachmentSubject: event.target.value });
//     }

//     // When user submits attachment form, save attachment inforation to database.
//     handleFormSubmit = event => {
//         event.preventDefault();
//         console.log("Adding attachment information");
//         console.log("this.state.attachmentDoctor: ", this.state.attachmentDoctor);
//         console.log("this.state.attachmentDate: ", this.state.attachmentDate);
//         console.log("this.state.attachmentSubject: ", this.state.attachmentSubject);
//     };

//   render() {
//     const { classes } = this.props;
//     return [
//       <div className={classes.appFrame}>
//       <Sidebar />
//       <main className={classes.content}>
//         <Container>
//           <Grid container spacing={24}>
//             <Grid item xs={12}>
//               <Typography variant="display1" align="left">
//                 Attachments
//               </Typography>
//             </Grid>
//           </Grid>

//           <div className="main-content-section">
//             <Grid container spacing={16}>
//               <Grid item xs={12} sm={12} md={6}>
//                 <AttachmentsForm
//                   handleFormSubmit={this.handleFormSubmit}
//                   handleAttachmentDoctorChange={this.handleAttachmentDoctorChange}
//                   handleAttachmentDateChange={this.handleAttachmentDateChange}
//                   handleAttachmentSubjectChange={this.handleAttachmentSubjectChange}/>
//               </Grid>
//               <Grid item xs={12} sm={12} md={6}>
//               </Grid>
//             </Grid>
//           </div>
//         </Container>
//       </main>
//     </div>,
//   ];
//   }
// }

// // Exporting the Attachments component so that the App.js file can use/render the Attachments page.
// export default withStyles(styles)(Attachments);
