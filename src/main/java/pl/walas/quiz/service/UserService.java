package pl.walas.quiz.service;

import org.springframework.stereotype.Service;
import pl.walas.quiz.model.User;
import pl.walas.quiz.repository.UserRepository;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveUser(String name, String email) {
        Optional<User> existingUser = userRepository.findByEmail(email);

        if (existingUser.isPresent()) {
            throw new RuntimeException("Użytkownik o tym emailu już istnieje!");
        } else {
            User user = new User();
            user.setName(name);
            user.setEmail(email);
            return userRepository.save(user);
        }
    }
    public User loginUser(String email) {
        Optional<User> existingUser = userRepository.findByEmail(email);

        if (existingUser.isPresent()) {
            return existingUser.get();
        } else {
            throw new RuntimeException("Użytkownik nie istnieje!");
        }
    }
}
