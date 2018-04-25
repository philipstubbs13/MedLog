import axios from 'axios';

export default {

  // Gets all Clinics
  getClinics() {
    return axios.get('/api/clinics');
  },
  // Gets a specific Clinic's id
  getClinic(id) {
    return axios.get('/api/clinics' + id);
  },
  // Deletes the book with the given id
  deleteClinic(id) {
    return axios.delete('/api/Clinics/' + id);
  },
  // Saves a Clinic to the database
  saveClinic (clinicData) {
    return axios.post('/api/clinics', clinicData);
  },
  // updates a Clinic in the database
  updateClinic(id) {
    return axios.put('/api/clinics' + id);
  },
};