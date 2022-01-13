import logo from './logo.svg';
import './App.css';
import Router from './router';
import TransitionRouter from './transition-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Router /> */}
        <BrowserRouter>
          <TransitionRouter />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
