import axios from 'axios';

export default {
  // Gets all logs
  getLog() {
    return axios.get('/api/logs');
  },
  // Saves a log to the database
  saveLog(logData) {
    return axios.post('/api/logs', logData);
  },
};
