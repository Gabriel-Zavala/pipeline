const usersService = require('./users.service');

const getAllUsers = async (req, res) => {
  try {
    const users = await usersService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await usersService.getUserById(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { nombre_completo, correo_electronico, numero_telefono } = req.body;
    
    if (!nombre_completo || !correo_electronico || !numero_telefono) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    const newUser = await usersService.createUser({
      nombre_completo,
      correo_electronico,
      numero_telefono
    });
    
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre_completo, correo_electronico, numero_telefono } = req.body;
    
    if (!nombre_completo || !correo_electronico || !numero_telefono) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    const updatedUser = await usersService.updateUser(id, {
      nombre_completo,
      correo_electronico,
      numero_telefono
    });
    
    if (!updatedUser) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await usersService.deleteUser(id);
    
    if (!deleted) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
