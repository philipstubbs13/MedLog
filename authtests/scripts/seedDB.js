const mongoose = require('mongoose');
const db = require('../models');

mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reacthealthtracker');

// const userSeed = {
//   firstname: 'Sara',
//   lastname: 'Bracewell',
//   username: 'loveIt',
//   password: 'gotToLoveIt',
//   email: 'bracewell.sara@gmail.com',
// };
// // // ];

// db.User
//   .remove({})
//   .then(() => db.User.collection.insertOne(userSeed))
//   .then((data) => {
//     console.log(data.insertedCount + ' user records inserted!');
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });
