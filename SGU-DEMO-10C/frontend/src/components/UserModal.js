import React, { useState, useEffect } from 'react';
import './UserModal.css';
import { API_ENDPOINTS } from '../services/api';

function UserModal({ user, onClose, onSave }) {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    correoElectronico: '',
    numeroTelefono: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        nombreCompleto: user.nombreCompleto || '',
        correoElectronico: user.correoElectronico || '',
        numeroTelefono: user.numeroTelefono || '',
      });
    } else {
      setFormData({
        nombreCompleto: '',
        correoElectronico: '',
        numeroTelefono: '',
      });
    }
    setErrors({});
  }, [user]);

  const validate = () => {
    const newErrors = {};
    
    if (!formData.nombreCompleto.trim()) {
      newErrors.nombreCompleto = 'El nombre completo es obligatorio';
    }
    
    if (!formData.correoElectronico.trim()) {
      newErrors.correoElectronico = 'El correo electrónico es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correoElectronico)) {
      newErrors.correoElectronico = 'El correo electrónico no es válido';
    }
    
    if (!formData.numeroTelefono.trim()) {
      newErrors.numeroTelefono = 'El número de teléfono es obligatorio';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setLoading(true);
    try {
      const url = user
        ? API_ENDPOINTS.USER_BY_ID(user.id)
        : API_ENDPOINTS.USERS;
      
      const method = user ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        onSave();
      } else {
        const errorData = await response.json();
        alert('Error al guardar el usuario: ' + (errorData.message || 'Error desconocido'));
      }
    } catch (error) {
      console.error('Error al guardar usuario:', error);
      alert('Error al guardar el usuario');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{user ? 'Editar Usuario' : 'Nuevo Usuario'}</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="nombreCompleto">Nombre Completo *</label>
            <input
              type="text"
              id="nombreCompleto"
              name="nombreCompleto"
              value={formData.nombreCompleto}
              onChange={handleChange}
              className={errors.nombreCompleto ? 'error' : ''}
            />
            {errors.nombreCompleto && (
              <span className="error-message">{errors.nombreCompleto}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="correoElectronico">Correo Electrónico *</label>
            <input
              type="email"
              id="correoElectronico"
              name="correoElectronico"
              value={formData.correoElectronico}
              onChange={handleChange}
              className={errors.correoElectronico ? 'error' : ''}
            />
            {errors.correoElectronico && (
              <span className="error-message">{errors.correoElectronico}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="numeroTelefono">Número de Teléfono *</label>
            <input
              type="tel"
              id="numeroTelefono"
              name="numeroTelefono"
              value={formData.numeroTelefono}
              onChange={handleChange}
              className={errors.numeroTelefono ? 'error' : ''}
            />
            {errors.numeroTelefono && (
              <span className="error-message">{errors.numeroTelefono}</span>
            )}
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-save" disabled={loading}>
              {loading ? 'Guardando...' : user ? 'Actualizar' : 'Crear'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserModal;
