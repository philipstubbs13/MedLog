// // Importing React since we are using React.
// import React, { Component } from "react";
// // Importing UI components from rebass.
// import { Container } from 'rebass';
// // Import AttachmentsForm
// import AttachmentsForm from  './AttachmentsForm';
// import AttachmentUpload from  './AttachmentUpload';
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

// // require s3 package
// const aws = require('aws-sdk');
// //require heroku config vars for s3 bucket
// let s3 = new aws.S3({
//   S3_KEY: process.env.S3_KEY,
//   S3_SECRET: process.env.S3_SECRET
// });
// const S3_BUCKET = process.env.S3_BUCKET;
// const xhr = new XMLHttpRequest();


// aws.config.region = 'us-east-2';

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

//     // PUT request to S3
//     uploadFile(file, signedRequest, url){
//       xhr.open('PUT', signedRequest);
//       xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//           if(xhr.status === 200){
//             document.getElementById('lab-subject').value = url;
//           }
//           else{
//             console.log("Could not upload file.");
//           }
//         }
//       };
//       xhr.send(file);
//     }

//     // temporary signed request to access s3 bucket
//     getSignedRequest(file){
//       xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
//       xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//           if(xhr.status === 200){
//             const response = JSON.parse(xhr.responseText);
//             uploadFile(file, response.signedRequest, response.url);
//           }
//           else{
//             console.log("Could not get signed URL.");
//           }
//         }
//       };
//       xhr.send();
//     }

//     // If there is a file selected, then
//     // start upload procedure by asking for a signed request from the app.
//     initUpload(){
//       const files = document.getElementById('file-input').files;
//       const file = files[0];
//       if(file == null){
//         return alert('No file selected.');
//       }
//       getSignedRequest(file);
//     }

//     // Bind listeners when the page loads.
//    (() => {
//        document.getElementById('file-input').onchange = initUpload;
//    })();


//     app.get('/sign-s3', (req, res) => {
//       const s3 = new aws.S3();
//       const key = req.query['key-name'];
//       const fileType = req.query['file-type'];
//       const s3Params = {
//         Bucket: S3_BUCKET,
//         Key: key,
//         Expires: 60,
//         ContentType: fileType,
//         ACL: 'public-read'
//       };

//       s3.getSignedUrl('putObject', s3Params, (err, data) => {
//         if(err){
//           console.log(err);
//           return res.end();
//         }
//         const returnData = {
//           signedRequest: data,
//           url: `https://${S3_BUCKET}.s3.amazonaws.com/${key}`
//         };
//         res.write(JSON.stringify(returnData));
//         res.end();
//       });
//     });

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
// export default withStyles(styles)(TestAttachments);
