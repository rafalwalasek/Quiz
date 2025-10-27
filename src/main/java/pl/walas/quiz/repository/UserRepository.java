package pl.walas.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pl.walas.quiz.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByName(String name);
}
