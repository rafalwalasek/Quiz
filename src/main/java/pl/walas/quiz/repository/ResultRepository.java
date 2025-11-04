package pl.walas.quiz.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.walas.quiz.model.Result;

public interface ResultRepository extends JpaRepository<Result, Long> {}
