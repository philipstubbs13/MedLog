import axios from 'axios';

export default {
  // Gets all doctors
  getDoctors: function() {
    return axios.get('/api/doctors');
  },
  //get a specific doctor's id
  getDoctor: function (id) {
    return axios.get('/api/doctors' + id);
  },
  // Deletes the book with the given id
  deleteDoctor: function (id) {
    return axios.delete("/api/doctors/" + id);
  },
  // Saves a doctor to the database
  saveDoctor: function(doctorData) {
    return axios.post('/api/doctors', doctorData);
  },
  // update a doctor in the database
  updateDoctor: function (id) {
    return axios.put('/api/doctors' + id);
  },
};