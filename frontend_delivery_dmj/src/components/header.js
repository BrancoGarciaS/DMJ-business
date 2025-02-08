import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const handleButtonClick = (buttonName) => {
    alert(`Has hecho clic en ${buttonName}`);
  };

  return (
    <header className="flex justify-between items-center px-10 py-4 bg-blue-800 text-white">
      <h1 className="text-xl font-bold">Recorriendo Chile</h1>
      <nav className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600"
          onClick={() => handleButtonClick('Inicio')}
        >
            <FontAwesomeIcon icon={faUserCircle} />
          Iniciar Sesión
          
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600"
          onClick={() => handleButtonClick('Servicios')}
        >
          Servicios
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600"
          onClick={() => handleButtonClick('Contacto')}
        >
          Contacto
        </button>
      </nav>
    </header>
  );
};

export default Header;