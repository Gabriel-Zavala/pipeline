const db = require('../../config/database');

const getAllUsers = async () => {
  const [rows] = await db.execute('SELECT * FROM usuarios ORDER BY id DESC');
  return rows;
};

const getUserById = async (id) => {
  const [rows] = await db.execute('SELECT * FROM usuarios WHERE id = ?', [id]);
  return rows[0];
};

const createUser = async (userData) => {
  const { nombre_completo, correo_electronico, numero_telefono } = userData;
  const [result] = await db.execute(
    'INSERT INTO usuarios (nombre_completo, correo_electronico, numero_telefono) VALUES (?, ?, ?)',
    [nombre_completo, correo_electronico, numero_telefono]
  );
  return getUserById(result.insertId);
};

const updateUser = async (id, userData) => {
  const { nombre_completo, correo_electronico, numero_telefono } = userData;
  const [result] = await db.execute(
    'UPDATE usuarios SET nombre_completo = ?, correo_electronico = ?, numero_telefono = ? WHERE id = ?',
    [nombre_completo, correo_electronico, numero_telefono, id]
  );
  
  if (result.affectedRows === 0) {
    return null;
  }
  
  return getUserById(id);
};

const deleteUser = async (id) => {
  const [result] = await db.execute('DELETE FROM usuarios WHERE id = ?', [id]);
  return result.affectedRows > 0;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
