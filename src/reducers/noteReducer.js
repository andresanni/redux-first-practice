import { createSlice, current } from '@reduxjs/toolkit';

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    createNote(state, action) {
      state.push(action.payload);
    },
    updateNote(state, action) {
      const noteToChange = action.payload;
      return state.map((note) =>
        note.id !== noteToChange.id ? note : noteToChange
      );
    },
    setNotes(state, action) {
      return action.payload;
    },
  },
});

export const { createNote, updateNote, appendNote, setNotes } =
  noteSlice.actions;
export default noteSlice.reducer;
