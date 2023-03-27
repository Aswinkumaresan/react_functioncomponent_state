import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Parent_function from './Parent_function/Parent_function';
// import Parentclass from './ParentClass/Parentclass';
import ParentStateFunc from './Parent_state/Parent_StateFunc';
// import Parent_class_state_file from './Parent_class_state/Parent_class_state_file.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Parent_function/>
  // <Parentclass/>
  <ParentStateFunc />
  // <Parent_class_state_file/>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

