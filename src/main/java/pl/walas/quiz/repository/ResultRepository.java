package pl.walas.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.walas.quiz.model.Result;

import java.util.List;

public interface ResultRepository extends JpaRepository<Result, Long> {
    List<Result> findByUserEmail(String email);
}
