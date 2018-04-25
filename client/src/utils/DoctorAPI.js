import axios from 'axios';

export default {
  // Gets all doctors
  getDoctors() {
    return axios.get('/api/doctors');
  },
  // Saves a doctor to the database
  saveDoctor(doctorData) {
    return axios.post('/api/doctors', doctorData);
  },
};
