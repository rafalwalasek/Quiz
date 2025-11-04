package pl.walas.quiz.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import pl.walas.quiz.dto.QuestionDTO;
import pl.walas.quiz.dto.QuizDTO;
import pl.walas.quiz.dto.ResultDTO;
import pl.walas.quiz.model.Result;
import pl.walas.quiz.model.User;
import pl.walas.quiz.repository.ResultRepository;
import pl.walas.quiz.service.QuestionService;
import pl.walas.quiz.service.QuizService;
import pl.walas.quiz.service.UserService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class QuizRestController {
    private final QuestionService questionService;
    private final UserService userService;
    private final QuizService quizService;
    private final ResultRepository resultRepository;

    public QuizRestController(QuestionService questionService, UserService userService, QuizService quizService, ResultRepository resultRepository) {
        this.questionService = questionService;
        this.userService = userService;
        this.quizService = quizService;
        this.resultRepository = resultRepository;
    }

    @GetMapping
    public List<QuestionDTO> getAllQuestions() {
        return questionService.getAllQuestions();
    }
    @GetMapping("result_db")
    public List<Result> getAllResults(@RequestParam String email) {
        return resultRepository.findByUserEmail(email);
    }

    @PostMapping("/add_user_to_db")
    public ResponseEntity<?> addUser(@RequestBody User user) {
        try {
            return ResponseEntity.ok(userService.saveUser(user.getName(), user.getEmail()));
        } catch (RuntimeException e) {
            return ResponseEntity.status(409).body(e.getMessage());
        }
    }
    @PostMapping("/login_user")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        try {
            return ResponseEntity.ok(userService.loginUser(user.getEmail()));
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }
    @PostMapping("/submit")
    public ResultDTO checkQuiz(@RequestBody QuizDTO quizDTO) {
            return quizService.checkQuiz(quizDTO);
    }
}
