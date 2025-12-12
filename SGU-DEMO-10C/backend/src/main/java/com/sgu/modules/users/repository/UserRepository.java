package com.sgu.modules.users.repository;

import com.sgu.modules.users.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByCorreoElectronico(String correoElectronico);
}
