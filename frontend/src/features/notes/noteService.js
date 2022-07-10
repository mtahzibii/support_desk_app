const axios = require('axios');

const API_URL = 'http://localhost:5000/api/tickets';

// Get ticket notes
const getNotes = async (ticketId, token) => {
 const config = {
  headers: {
   Authorization: `Bearer ${token}`,
  },
 };

 const response = await axios.get(`${API_URL}/${ticketId}/notes`, config);

 return response.data;
};

// Create note for ticket
const createNote = async (noteText, ticketId, token) => {
 const config = {
  headers: {
   Authorization: `Bearer ${token}`,
  },
 };

 const response = await axios.post(
  `${API_URL}/${ticketId}/notes`,
  {
   text: noteText,
  },
  config
 );

 return response.data;
};

const noteService = { getNotes, createNote };
module.exports = noteService;
