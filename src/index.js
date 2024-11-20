import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registros from './paginas/Registros';
import home from './App'
import Lectura from './paginas/lectura';
import Encuentros from './paginas/encuentros';
import Libro from './paginas/libro';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<App />} />

        {/* Akashic Records Page Route */}
        <Route path="/registros" element={<Registros />} />
        <Route path="/lectura" element={<Lectura />} />
        <Route path="/encuentros" element={<Encuentros />} />
        <Route path="/milibro" element={<Libro />} />
        {/* Additional Routes can be added here */}
        <Route path="/" element={<home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
