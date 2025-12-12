package com.sgu.modules.users.service;

import com.sgu.modules.users.entity.User;
import com.sgu.modules.users.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(Long id, User userDetails) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado con id: " + id));
        
        user.setNombreCompleto(userDetails.getNombreCompleto());
        user.setCorreoElectronico(userDetails.getCorreoElectronico());
        user.setNumeroTelefono(userDetails.getNumeroTelefono());
        
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("Usuario no encontrado con id: " + id);
        }
        userRepository.deleteById(id);
    }
}
