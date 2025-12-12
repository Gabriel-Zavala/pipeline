import React, { useState, useEffect } from 'react';
import './App.css';
import UsersTable from './components/UsersTable';
import UserModal from './components/UserModal';
import { API_ENDPOINTS } from './services/api';

function App() {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_ENDPOINTS.USERS);
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingUser(null);
    setIsModalOpen(true);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      try {
        const response = await fetch(API_ENDPOINTS.USER_BY_ID(id), {
          method: 'DELETE',
        });
        if (response.ok) {
          fetchUsers();
        } else {
          alert('Error al eliminar el usuario');
        }
      } catch (error) {
        console.error('Error al eliminar usuario:', error);
        alert('Error al eliminar el usuario');
      }
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingUser(null);
  };

  const handleModalSave = () => {
    fetchUsers();
    handleModalClose();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sistema de Gestión de Usuarios</h1>
        <button className="btn-primary" onClick={handleCreate}>
          Nuevo Usuario
        </button>
      </header>
      <main className="App-main">
        {loading ? (
          <div className="loading">Cargando usuarios...</div>
        ) : (
          <UsersTable
            users={users}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </main>
      {isModalOpen && (
        <UserModal
          user={editingUser}
          onClose={handleModalClose}
          onSave={handleModalSave}
        />
      )}
    </div>
  );
}

export default App;

