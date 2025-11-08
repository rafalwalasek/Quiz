package pl.walas.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pl.walas.quiz.model.Question;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    Long countByCategory_Category(String category);

    @Query(value = "SELECT q.id, q.question_text, q.option_a, q.option_b, q.option_c, q.option_d, q.correct_option, q.category_id " +
            "FROM question q " +
            "JOIN category c ON q.category_id = c.id " +
            "WHERE c.category = :category " +
            "ORDER BY RANDOM() " +
            "LIMIT 40", nativeQuery = true)
    List<Question> findRandom40ByCategory(@Param("category") String category);
}
