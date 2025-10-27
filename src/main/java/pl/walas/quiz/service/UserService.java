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

    public User saveUser(String name) {
        Optional<User> existingUser = userRepository.findByName(name);

        if (existingUser.isPresent()) {
            return existingUser.get();
        } else {
            User user = new User();
            user.setName(name);
            return userRepository.save(user);
        }
    }
}
