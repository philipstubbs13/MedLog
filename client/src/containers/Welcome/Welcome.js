// // Importing React since we are using React.
// import React, { Component } from 'react';
// // Importing UI components from rebass.
// import { Container } from 'rebass';
// // Import UI components from material-ui-next.
// import { withStyles } from 'material-ui/styles';
// import Grid from 'material-ui/Grid';
// import Typography from 'material-ui/Typography';
// import Card, { CardActions, CardContent } from 'material-ui/Card';
// import Button from 'material-ui/Button';
// // import third-party routing library (react-router-dom)
// import { Link } from 'react-router-dom';

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   headline: {
//     marginTop: 30,
//   },
//   card: {
//     marginTop: 60,
//     borderStyle: 'solid',
//     borderWidth: 4,
//     borderColor: '#007AC1',
//   },
//   button: {
//     marginTop: 20,
//     padding: 15,
//     backgroundColor: '#007AC1',
//     color: 'white',
//   },
//   cardAction: {
//     justifyContent: 'center',
//   },
// };

// class Welcome extends Component {
//   render() {
//     const { classes } = this.props;
//     return [
//       <Container>,
//         <div className="main-content-section">
//           <Grid container spacing={24} className={classes.root} justify="center" alignItems="center">
//             <Grid item xs={12} sm={12} md={6} className={classes.headline}>
//               <Grid container spacing={24} className={classes.root} justify="center">
//                 <Typography variant="display3" align="center">
//                   Welcome to HealthTracker
//                 </Typography>
//               </Grid>
//             </Grid>

//             <Grid item xs={12} sm={12} md={6}>
//               <Card className={classes.card}>
//                 <CardContent>
//                   <Typography gutterBottom variant="headline" component="h2" align="center">
//                     New user?
//                   </Typography>
//                   <Typography component="p">
//                     If you are a new user, you will need to set up at least one primary clinic and one primary doctor before you can use the app.
//                   </Typography>
//                 </CardContent>
//                 <CardActions className={classes.cardAction}>
//                   <Button size="small" color="primary" className={classes.button}>
//                     Set up doctors and clinics
//                   </Button>
//                 </CardActions>
//               </Card>

//               <Card className={classes.card}>
//                 <CardContent>
//                   <Typography gutterBottom variant="headline" component="h2" align="center">
//                     Returning user?
//                   </Typography>
//                   <Typography component="p" component={Link} to="/setup">
//                     Welcome back! Click the button below to go to the Home page and pick up where you left off.
//                   </Typography>
//                 </CardContent>
//                 <CardActions className={classes.cardAction}>
//                   <Button size="small" color="primary" className={classes.button} component={Link} to="/home">
//                     Continue to home page
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           </Grid>
//         </div>,
//       </Container>,
//     ];
//   }
// }

// // Exporting the Home component so that the App.js file can render the Home page.
// export default withStyles(styles)(Welcome);
