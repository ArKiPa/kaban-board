import React from 'react';
import ReactDOM from 'react-dom/client';
import Api from './components/Api/Api.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Api />
    </React.StrictMode>
);