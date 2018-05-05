// Exporting an object containing all of our models

module.exports = {
  User: require('./User'),
  Clinic: require('./clinic'),
  Doctor: require('./doctor'),
  HealthLog: require('./healthlog'),
  Appointment: require('./appointment'),
  SymptomJournal: require('./symptom'),
  Prescription: require('./prescription'),
  //Code: require('./Code'),
  //Token: require('./token'),
  //Client: require('./Client'),
};
