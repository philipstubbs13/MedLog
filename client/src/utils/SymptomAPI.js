import axios from 'axios';

export default {
  // Gets all symptoms
  getSymptoms() {
    return axios.get('/api/symptoms');
  },
  // Deletes the symptom with the given id
  // deleteSymptom(id) {
  //   return axios.delete(`/api/symptoms/${id}`);
  // },
  // Saves a symptom to the database
  saveSymptom(symptomData) {
    return axios.post('/api/symptoms', symptomData);
  },
};
