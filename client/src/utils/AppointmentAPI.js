import axios from 'axios';

export default {
  // Gets all appointments
  getAppointments() {
    return axios.get('/api/appointments');
  },
  // Saves an appointment to the database
  saveAppointment(appointmentData) {
    return axios.post('/api/appointments', appointmentData);
  },
  // get a specific appointment's id
  getAppointment(id) {
    return axios.get(`/api/appointments/${id}`);
  },
  // Deletes the appointment with the given id
  deleteAppointment(id) {
    return axios.delete(`/api/appointments/${id}`);
  },
  // update an appointment in the database
  updateAppointment(id) {
    return axios.put(`/api/appointments/${id}`);
  },
};
