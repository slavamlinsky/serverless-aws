import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Any Changes</h1>
          <img src={logo} className="App-logo" alt="logo" />        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React is a perfect marriage of JavaScript and MarkUp
        </a>
      </header>
    </div>
  );
}

export default App;
