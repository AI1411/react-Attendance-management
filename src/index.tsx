import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tailwind.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from "./components/Nav";
import './axios';
import axios from "axios";

axios.defaults.baseURL = 'https://sakura.test/api';

ReactDOM.render(
    <React.StrictMode>
        <div className="bg-gray-100 font-family-karla flex">
            <Nav/>
            <App/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
