package pl.walas.quiz.controller;

import org.springframework.web.bind.annotation.*;

import pl.walas.quiz.dto.QuestionDTO;
import pl.walas.quiz.model.User;
import pl.walas.quiz.service.QuestionService;
import pl.walas.quiz.service.UserService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/quiz")
public class QuizRestController {
    private final QuestionService questionService;
    private final UserService userService;

    public QuizRestController(QuestionService questionService, UserService userService) {
        this.questionService = questionService;
        this.userService = userService;
    }

    @GetMapping
    public List<QuestionDTO> getAllQuestions() {
        return questionService.getAllQuestions();
    }

    @PostMapping("/users")
    public User addUser(@RequestBody User user) {
        System.out.println(user);
        return userService.saveUser(user.getName());
    }
}
