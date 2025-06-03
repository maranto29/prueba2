import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importa Routes y Route
import BirthdayInvitation from './BirthdayInvitation'; // Asegúrate de que este es el nombre de tu componente
import ConfirmationPage from './ConfirmationPage'; // Vas a crear este componente

function App() {
  return (
    <Routes>
      <Route path="/" element={<BirthdayInvitation />} />
      <Route path="/confirmacion" element={<ConfirmationPage />} />
      {/* Puedes agregar más rutas aquí */}
    </Routes>
  );
}

export default App;