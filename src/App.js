import logo from './logo.svg';
import './App.css';
import BooksTable from './Books/BooksTable';
import Router from './router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router />
      </header>
    </div>
  );
}

export default App;
