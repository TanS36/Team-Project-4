package skillbridge.example.SkillBridge_Website.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import skillbridge.example.SkillBridge_Website.entities.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email); // Find user by email
}
