import logo from './logo.svg';
import './App.css';

import DefaultComponent from './Name';
import TodoApp from './Todo';
import EventEx from './eventPropogation';
import { Country } from "./Country";

export const App2 = (props) => {
  return (
    <div>
      <EventEx viewLink={true} value2="something else" />
    </div>
  );
}
export const App3 = (props) => {
  return (<div><DefaultComponent /></div>);
}
export const App4 = (props) => {
  return (<div><Country /></div>);
}
export const App5 = (props) => {
  return <TodoApp />
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
