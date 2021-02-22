import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App2, App4 } from './App';
// no braces - default export
// specific exports - curly braces {}
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <App4 />,//what
  document.getElementById('react-mounting-element')//where
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*

const obj = {
  ..
  ..
  ..

}

export const some = obj.somepropety;

export default obj;
*/