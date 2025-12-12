import React, { useState, useEffect } from 'react';
import './App.css';
import UsersTable from './components/UsersTable';
import UserModal from './components/UserModal';
import usersService from './services/users.service';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await usersService.getAllUsers();
      setUsers(data);
    } catch (error) {
      console.error('Error cargando usuarios:', error);
      alert('Error al cargar los usuarios');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingUser(null);
    setShowModal(true);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      try {
        await usersService.deleteUser(id);
        loadUsers();
        alert('Usuario eliminado correctamente');
      } catch (error) {
        console.error('Error eliminando usuario:', error);
        alert('Error al eliminar el usuario');
      }
    }
  };

  const handleSave = async (userData) => {
    try {
      if (editingUser) {
        await usersService.updateUser(editingUser.id, userData);
        alert('Usuario actualizado correctamente');
      } else {
        await usersService.createUser(userData);
        alert('Usuario creado correctamente');
      }
      setShowModal(false);
      loadUsers();
    } catch (error) {
      console.error('Error guardando usuario:', error);
      alert('Error al guardar el usuario');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>SGU - Sistema de Gestión de Usuarios</h1>
        </div>
        
        <div className="table-container">
          <div className="table-header">
            <h2>Lista de Usuarios</h2>
            <button className="btn btn-primary" onClick={handleCreate}>
              + Nuevo Usuario
            </button>
          </div>
          
          {loading ? (
            <div className="empty-state">Cargando...</div>
          ) : (
            <UsersTable
              users={users}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </div>

        <UserModal
          show={showModal}
          user={editingUser}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      </div>
    </div>
  );
}

export default App;
