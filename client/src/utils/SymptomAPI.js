import axios from 'axios';

export default {
  // Gets all symptoms
  getSymptoms() {
    return axios.get('/api/symptoms');
  },
  // Saves a symptom to the database
  saveSymptom(symptomData) {
    return axios.post('/api/symptoms', symptomData);
  },
  // get a specific symptom's id
  getSymptom(id) {
    return axios.get(`/api/symptoms/${id}`);
  },
  // Deletes the symptom with the given id
  deleteSymptom(id) {
    return axios.delete("/api/symptoms/" + id);
  },

  // update a symptom in the database
  updateSymptom(id) {
    return axios.put(`/api/symptoms/${id}`);
  },
};
