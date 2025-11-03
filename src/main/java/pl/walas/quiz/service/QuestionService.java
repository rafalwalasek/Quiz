package pl.walas.quiz.service;

import org.springframework.stereotype.Service;

import pl.walas.quiz.dto.QuestionDTO;
import pl.walas.quiz.model.Question;
import pl.walas.quiz.repository.QuestionRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public List<QuestionDTO> getAllQuestions() {
        List<Question> questions = questionRepository.findAll();
        List<QuestionDTO> dtoList = new ArrayList<>();

        for (Question q : questions) {
            QuestionDTO dto = new QuestionDTO();

            dto.setId(q.getId());
            dto.setQuestion_text(q.getQuestion_text());
            dto.setOption_a(q.getOption_a());
            dto.setOption_b(q.getOption_b());
            dto.setOption_c(q.getOption_c());
            dto.setOption_d(q.getOption_d());
            dto.setCorrect_option(q.getCorrect_option());

            dtoList.add(dto);
        }

        return dtoList;
    }
}
