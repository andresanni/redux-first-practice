import { useDispatch, useSelector } from 'react-redux';
import { updateNote } from '../reducers/noteReducer';
import noteService from '../service/notes';
import Note from './Note';

const NotesList = () => {
  const dispatch = useDispatch();

  const notes = useSelector((state) => {
    switch (state.filter) {
      case 'ALL':
        return state.notes;
      case 'IMPORTANT':
        return state.notes.filter((note) => note.important);
      case 'NONIMPORTANT':
        return state.notes.filter((note) => !note.important);
      default:
        return state.notes;
    }
  });

  const toggleImportance = async (note) => {
    const changedNote = { ...note, important: !note.important };
    const updatedNote = await noteService.update(note.id, changedNote);
    console.log({ updatedNote });
    dispatch(updateNote(updatedNote));
  };

  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          handleClick={() => toggleImportance(note)}
          note={note}
        />
      ))}
    </ul>
  );
};

export default NotesList;
