import React, { useState, useEffect } from 'react';

const UserModal = ({ show, user, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    nombre_completo: '',
    correo_electronico: '',
    numero_telefono: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        nombre_completo: user.nombre_completo || '',
        correo_electronico: user.correo_electronico || '',
        numero_telefono: user.numero_telefono || ''
      });
    } else {
      setFormData({
        nombre_completo: '',
        correo_electronico: '',
        numero_telefono: ''
      });
    }
  }, [user, show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.nombre_completo || !formData.correo_electronico || !formData.numero_telefono) {
      alert('Todos los campos son requeridos');
      return;
    }

    onSave(formData);
  };

  if (!show) return null;

  return (
    <div className="modal show" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{user ? 'Editar Usuario' : 'Nuevo Usuario'}</h2>
          <span className="close" onClick={onClose}>&times;</span>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre_completo">Nombre Completo:</label>
            <input
              type="text"
              id="nombre_completo"
              name="nombre_completo"
              value={formData.nombre_completo}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="correo_electronico">Correo Electrónico:</label>
            <input
              type="email"
              id="correo_electronico"
              name="correo_electronico"
              value={formData.correo_electronico}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="numero_telefono">Número de Teléfono:</label>
            <input
              type="tel"
              id="numero_telefono"
              name="numero_telefono"
              value={formData.numero_telefono}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-actions">
            <button type="button" className="btn btn-danger" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-success">
              {user ? 'Actualizar' : 'Crear'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
