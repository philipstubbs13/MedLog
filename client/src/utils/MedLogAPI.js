import axios from 'axios';

export default {
  // Gets all logs
  getLogs() {
    return axios.get('/api/logs');
  },
  // Saves a log to the database
  saveLog(logData) {
    return axios.post('/api/logs', logData);
  },
  // get a specific log's id
  getLog(id) {
    return axios.get(`/api/logs/${id}`);
  },
  // Deletes the log with the given id
  deleteLog(id) {
    return axios.delete(`/api/logs/${id}`);
  },
  // update a log in the database
  updateLog(id) {
    return axios.put(`/api/logs/${id}`);
  },
};
