import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App5, App4, RoutingApp } from './App';
// no braces - default export
// specific exports - curly braces {}
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <RoutingApp />,//what
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