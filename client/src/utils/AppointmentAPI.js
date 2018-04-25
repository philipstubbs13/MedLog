import axios from 'axios';

export default {
  // Gets all appointments
  getAppointments() {
    return axios.get('/api/appointments');
  },
  // Saves a log to the database
  saveAppointment(appointmentData) {
    return axios.post('/api/appointments', appointmentData);
  },
};
