// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Asegúrate de usar 'react-dom/client' para React 18 en adelante
import App from './App'; // Importa el componente App

// Renderiza el componente App en el elemento con id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
