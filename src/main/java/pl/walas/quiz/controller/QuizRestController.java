package pl.walas.quiz.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/quiz")
public class QuizRestController {

    @GetMapping("/")
    public String helloWorld() {
        return "Backend działa!";
    }



}
