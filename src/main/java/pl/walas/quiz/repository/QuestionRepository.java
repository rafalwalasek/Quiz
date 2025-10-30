package pl.walas.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.walas.quiz.model.Question;
import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
     //List<Question> findByQuizId(Long quizId);
}
