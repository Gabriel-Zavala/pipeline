// Configuración de la API
// En producción (Docker con nginx), usa rutas relativas que serán manejadas por el proxy
// En desarrollo local, usa localhost:8080 directamente
// Detecta si estamos en el navegador accediendo desde localhost:3000 (Docker) o desde otro puerto (desarrollo)
const getApiBaseUrl = () => {
  // Si hay una variable de entorno definida, úsala
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }
  
  // En producción (build de React), usa rutas relativas (nginx hará el proxy)
  // En desarrollo, usa localhost:8080
  if (process.env.NODE_ENV === 'production') {
    return ''; // Ruta relativa para nginx proxy
  }
  
  // Desarrollo local
  return 'http://localhost:8080';
};

const API_BASE_URL = getApiBaseUrl();

export const API_ENDPOINTS = {
  USERS: `${API_BASE_URL}/api/users`,
  USER_BY_ID: (id) => `${API_BASE_URL}/api/users/${id}`,
};

