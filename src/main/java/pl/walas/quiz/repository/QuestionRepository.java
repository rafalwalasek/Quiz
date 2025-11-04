package pl.walas.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.walas.quiz.model.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {}
