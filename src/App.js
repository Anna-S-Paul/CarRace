import logo from './logo.svg';
import './App.css';
import AddRace from './components/AddRace';
import SearchRace from './components/SearchRace';
import DeleteRace from './components/DeleteRace';
import ViewRace from './components/ViewRace';

function App() {
  return (
    <div>
      <AddRace/>
      <SearchRace/>
      <DeleteRace/>
      <ViewRace/>
    </div>
  );
}

export default App;
