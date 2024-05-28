import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import VisibilityFilter from './components/VisibilityFilter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import noteService from './service/notes';
import { setNotes } from './reducers/noteReducer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    noteService.getAll().then((notes) => dispatch(setNotes(notes)));
  }, []);

  return (
    <div>
      <NoteForm />
      <VisibilityFilter />
      <NotesList />
    </div>
  );
};

export default App;
