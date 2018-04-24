import axios from 'axios';

export default {
  // Gets all appointments
  getAppointments() {
    return axios.get('/api/appointments');
  },
};
