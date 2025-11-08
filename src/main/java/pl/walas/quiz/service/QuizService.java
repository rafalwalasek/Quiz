package pl.walas.quiz.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.walas.quiz.dto.QuestionResultDTO;
import pl.walas.quiz.dto.QuizDTO;
import pl.walas.quiz.dto.ResultDTO;
import pl.walas.quiz.model.Question;
import pl.walas.quiz.model.Result;
import pl.walas.quiz.model.User;
import pl.walas.quiz.repository.QuestionRepository;
import pl.walas.quiz.repository.ResultRepository;
import pl.walas.quiz.repository.UserRepository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class QuizService {
    private final UserRepository userRepository;
    private final QuestionRepository questionRepository;

    @Autowired
    private ResultRepository resultRepository;

    public QuizService(UserRepository userRepository, QuestionRepository questionRepository) {
        this.userRepository = userRepository;
        this.questionRepository = questionRepository;
    }

    public ResultDTO checkQuiz(QuizDTO quizDTO) {
        User user = userRepository.findByEmail(quizDTO.getUserEmail())
                .orElseThrow(() -> new RuntimeException("Użytkownik nie istnieje!"));
        List<Question> questions = questionRepository.findAll();
        List<QuestionResultDTO> questionResults = new ArrayList<>();

        int correctCount = 0;
        for (Question question : questions) {
            String userAnswer = quizDTO.getUserAnswers().get(question.getId());

            QuestionResultDTO qResult = new QuestionResultDTO();
            qResult.setQuestionId(question.getId());
            qResult.setUserAnswer(userAnswer);
            qResult.setCorrectAnswer(question.getCorrect_option());

            questionResults.add(qResult);

            if (question.getCorrect_option().equals(userAnswer)) {
                correctCount++;
            }
        }

        double percent = ((double) correctCount / 40) * 100;
        boolean passed = percent >= 75;

        ResultDTO resultDTO = new ResultDTO();
        resultDTO.setUserId(user.getId());
        resultDTO.setCorrectCount(correctCount);
        resultDTO.setTotalQuestions(40);
        resultDTO.setPercent(percent);
        resultDTO.setPassed(passed);
        resultDTO.setQuestionResults(questionResults);

        Result resultEntity = new Result();
        resultEntity.setUser(user);
        resultEntity.setCorrectCount(correctCount);
        resultEntity.setTotalQuestions(40);
        resultEntity.setPercent(percent);
        resultEntity.setPassed(passed);
        resultEntity.setDateTime(LocalDateTime.now());

        resultRepository.save(resultEntity);

        return resultDTO;
    }
}
