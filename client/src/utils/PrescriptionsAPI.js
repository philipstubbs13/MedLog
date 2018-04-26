import axios from 'axios';

export default {
  // Gets all prescriptions
  getPrescriptions() {
    return axios.get('/api/prescriptions');
  },
  // Saves a prescription to the database
  savePrescription(prescriptionData) {
    return axios.post('/api/prescriptions', prescriptionData);
  },
  // get a specific prescription's id
  getPrescription(id) {
    return axios.get(`/api/prescriptions/${id}`);
  },
  // Deletes the prescription with the given id
  deletePrescription(id) {
    return axios.delete(`/api/prescriptions/${id}`);
  },
  // update a prescription in the database
  updatePrescription(id) {
    return axios.put(`/api/prescriptions/${id}`);
  },
};
