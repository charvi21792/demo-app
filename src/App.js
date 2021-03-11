import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
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

export const RoutingApp = (props) => {
  let history = createBrowserHistory();
  return (
    <Router history={history}>

      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/todo">Todo</Link></li>
          <li><Link to="/country">Country</Link></li>
          <li><Link to="/country/name">Name</Link></li>
          <li><Link to="/events">Events</Link></li>
        </ul>
      </div>
      <Route exact path="/" component={App} />
      <Route path="/todo" component={TodoApp} />
      <Route exact path="/country" component={Country} />
      <Route path="/country/:id" component={DefaultComponent} />
      <Route path="/events" component={EventEx} />
    </Router>
  );
}