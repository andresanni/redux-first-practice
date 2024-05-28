import axios from 'axios';

const baseURL = 'http://localhost:3001/notes';

const getAll = async () => {
  const response = await axios.get(baseURL);
  return response.data;
};

const generateId = () => {
  return Number((Math.random() * 1000000).toFixed(0)).toString();
};

const createNew = async (content) => {
  const note = { content, important: false, id: generateId() };
  const response = await axios.post(baseURL, note);
  return response.data;
};

const update = async (id, newNoteObject) => {
  const response = await axios.put(`${baseURL}/${id}`, newNoteObject);
  return response.data;
};

export default { getAll, createNew, update };
