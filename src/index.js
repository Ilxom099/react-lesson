import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './Main';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App meros={"Tracker"} price={200} />
    <Main/>
);
