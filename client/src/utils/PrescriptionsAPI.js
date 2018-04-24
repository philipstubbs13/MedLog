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
};
