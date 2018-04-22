import axios from 'axios';

export default {
  // Gets all logs
  getLog() {
    return axios.get('/api/log');
  },
  // Deletes the log with the given id
  deleteLog(id) {
    return axios.delete(`/api/log/${id}`);
  },
  // Saves a log to the database
  saveLog(logData) {
    return axios.post('/api/log', logData);
  },
};
