import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LastCreatedPanel = () => {
  const [lastCreatedItem, setLastCreatedItem] = useState({});

  useEffect(() => {
    const fetchLastCreatedItem = async () => {
      try {
        const response = await axios.get('/api/lastCreatedItem'); // Ruta en backend para obtener el último producto o usuario creado
        setLastCreatedItem(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLastCreatedItem();
  }, []);

  return (
    <div className="last-created-panel">
      <h2>Último creado</h2>
      <div>
        <p>Nombre: {lastCreatedItem.name}</p>
        <p>Fecha de creación: {lastCreatedItem.createdDate}</p>
        <p>Creado por: {lastCreatedItem.createdBy}</p>
      </div>
    </div>
  );
};

export default LastCreatedPanel;