import logo from './logo.svg';
import './App.css';

import Name from './Name';

export const App2 = (props) => {
  return (
    <div>
      <Name age={45} />
    </div>
  );
}
export const App3 = (props) => {
  return (<div><Name /></div>);
}
export const App4 = (props) => {
  return (<div><Name /></div>);
}

function App(props) {
  return (
    <div className="App" id="container-div">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
