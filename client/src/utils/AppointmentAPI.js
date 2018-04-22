import axios from 'axios';

export default {
  // Gets all appointments
  getAppointments() {
    return axios.get('/api/appointments');
  },
  // Deletes the appointment with the given id
  deleteAppointment(id) {
    return axios.delete(`/api/appointments/${id}`);
  },
  // Saves an appointment to the database
  saveAppointment(appointmentData) {
    return axios.post('/api/appointments', appointmentData);
  },
};