// App.js
import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">¡Bienvenido a mi aplicación!</h1>
      <p className="text-lg text-gray-700">Esta es una aplicación de ejemplo usando Tailwind CSS.</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Botón de ejemplo
      </button>
    </div>
  );
};

export default App;
