import React from 'react';

const UsersTable = ({ users, onEdit, onDelete }) => {
  if (users.length === 0) {
    return (
      <div className="empty-state">
        <p>No hay usuarios registrados. Crea uno nuevo para comenzar.</p>
      </div>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre Completo</th>
          <th>Correo Electrónico</th>
          <th>Número de Teléfono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.nombre_completo}</td>
            <td>{user.correo_electronico}</td>
            <td>{user.numero_telefono}</td>
            <td>
              <button
                className="btn btn-warning"
                onClick={() => onEdit(user)}
                style={{ marginRight: '10px' }}
              >
                Editar
              </button>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(user.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
