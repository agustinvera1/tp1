//Este componente va a usar useEffect + fetch para obtener los datos.
import React, { useEffect, useState } from 'react';
import './UserList.css';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Llamado a la API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener usuarios:', error);
        setLoading(false);
      });
  }, []); // Solo se ejecuta una vez cuando se monta el componente

  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  return (
    <div className="user-list">
      <h2>Usuarios desde la API</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;