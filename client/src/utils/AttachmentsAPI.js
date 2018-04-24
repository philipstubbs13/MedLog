import axios from 'axios';

export default {
  // Gets all attachments
  getAttachments() {
    return axios.get('/api/attachments');
  },
  // Saves an attachment to the database
  saveAttachment(attachmentData) {
    return axios.post('/api/attachments', attachmentData);
  },
};
