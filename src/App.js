import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks/Tasks'
import NewTask from './components/NewTask/NewTask'

const App = () => {
  return (
    <div className="app">
      <NewTask/>
      <Tasks></Tasks>
    </div>
  );
}

export default App;
