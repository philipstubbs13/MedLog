const mongoose = require('mongoose');
const db = require('../models');

mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reacthealthtracker');


const userSeed = [
  {
    firstname: 'Sara',
    lastname: 'Bracewell',
    username: 'loveIt',
    password: 'gotToLoveIt',
    email: 'bracewell.sara@gmail.com',
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertOne(userSeed))
  .then((data) => {
    console.log(data.insertedIds.length + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// will have to create seeds for healthLog, doctors, clinics, prescriptions (and appointments?)
const healthLogSeed = [
  {
    date: '10/20/2017',
    doctor: 'Kristin King',
    clinic: 'Childrens Clinic',
    visitPurpose: '3 month follow up',
    notes: 'Having issues with new meds, so the prescription was changed. Sick a lot - suggests follow up with respiratory doctor asap. Weight should be monitored.',
    nextAppt: '3 months',
    heightIn: 50,
    weightLb: 55,
  },
  {
    date: '10/28/2017',
    doctor: 'Larry Lungs',
    clinic: 'Childrens Respiratory',
    visitPurpose: '3 month follow up',
    notes: 'Been sick every month, asthma plan not working. Need to do more with allergy doctor if everything is starting with her nose. And check in with ENT to see if there is anything else that could be causing this',
    nextAppt: '3 months',
    heightIn: 50,
    weightLb: 55,
  },
  {
    date: '10/29/2017',
    doctor: 'Ned Nose',
    clinic: 'Childrens ENT',
    visitPurpose: '3 month follow up',
    notes: 'Nasal tissue inflamed, should do surgery to reduce this if desired. Only temorary help, need to figure out allergy issue. Need to see someone new, game name. Allergy or immunology issue.',
    nextAppt: '1 month',
    heightIn: 51,
    weightLb: 57,
  },
  {
    date: '11/01/2017',
    doctor: 'Sam Sneezy',
    clinic: 'Allergy MN',
    visitPurpose: 'Allergy testing, new doctor visit',
    notes: 'Definitely allergy to this. But over reacting to it. Need to try new med on the market to remove allergy reaction. Start that tomorrow. Need records and solution from previous allergist. Did blood draw for immune issues',
    nextAppt: '3 months',
    heightIn: 51,
    weightLb: 50,
  },
  {
    date: '11/15/2017',
    doctor: 'Sally Stomach',
    clinic: 'Gastro MN',
    visitPurpose: '3 month follow up',
    notes: 'Doctor not happy with previous labs, want to do endoscopy to check for issues. Explained ENT wants to do surgery, need to get them to do together so less issue with anesthesia. They will call me with date/time. Changed prescription to 10mls twice daily.',
    nextAppt: '3 months',
    heightIn: 50,
    weightLb: 52,
  },
  {
    date: '12/01/2017',
    doctor: 'Kristin King',
    clinic: 'Childrens Clinic',
    visitPurpose: 'Pre-Op',
    notes: 'Looks good for surgery. Happy with allergist workup into immune issues. Need to add vit D to rx, and up probiotic. Want to change to higher fat diet to get weight better',
    nextAppt: '3 months',
    heightIn: 52,
    weightLb: 52,
  },
];

// use HealthLog;

db.HealthLog
  .remove({})
  .then(() => db.HealthLog.collection.insertMany(healthLogSeed))
  .then((data) => {
    console.log(data.insertedIds.length + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
