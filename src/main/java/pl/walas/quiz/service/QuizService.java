//package pl.walas.quiz.service;
//
//import org.springframework.stereotype.Service;
//import pl.walas.quiz.dto.QuizDTO;
//import pl.walas.quiz.dto.ResultDTO;
//import pl.walas.quiz.model.Question;
//import pl.walas.quiz.repository.QuestionRepository;
//
//import java.time.LocalDateTime;
//import java.util.List;
//
//@Service
//public class QuizService {
//    private final QuestionRepository questionRepository;
//
//    public QuizService(QuestionRepository questionRepository) {
//        this.questionRepository = questionRepository;
//    }
//
//    public ResultDTO checkQuiz(QuizDTO quizDTO) {
//        int correctCount = 0;
//
//        List<Question> questions = questionRepository.findByQuizId(quizDTO.getQuizId());
//        for (Question question : questions) {
//            if (question.getCorrect_option().equals(quizDTO.getUserAnswers().get(question.getId()))) {
//                correctCount++;
//            }
//        }
//
//        int totalQuestions = questions.size();
//        double percent = (correctCount / (double) totalQuestions) * 100;
//
//        boolean passed = false;
//        if (percent >= 75) {
//            passed = true;
//        }
//
//        ResultDTO resultDTO = new ResultDTO();
//        resultDTO.setCorrectCount(correctCount);
//        resultDTO.setTotalQuestions(totalQuestions);
//        resultDTO.setPercent(percent);
//        resultDTO.setPassed(passed);
//        resultDTO.setUserId(quizDTO.getUserId());
//        resultDTO.setQuizId(quizDTO.getQuizId());
//        resultDTO.setDateTaken(LocalDateTime.now());
//
//        return resultDTO;
//    }
//}
