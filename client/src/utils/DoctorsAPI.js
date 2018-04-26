import axios from 'axios';

export default {
  // Gets all doctors
  getDoctors() {
    return axios.get('/api/doctors');
  },
  // get a specific doctor's id
  getDoctor(id) {
    return axios.get('/api/doctors/' + id);
  },
  // Deletes the doctor with the given id
  deleteDoctor(id) {
    return axios.delete('/api/doctors/' + id);
  },
  // Saves a doctor to the database
  saveDoctor(doctorData) {
    return axios.post('/api/doctors/', doctorData);
  },
  // updates a doctor in the database
  updateDoctor(id) {
    return axios.put('/api/doctors/' + id);
  },
};