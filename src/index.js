import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';
import Ending from './kajalfile';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MainModal from './MainModal';
// import Subapp from './Subapp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/* <MainModal></MainModal> */}
    {/* <Ending /> */}
    <App></App>
    {/* <Subapp></Subapp> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
