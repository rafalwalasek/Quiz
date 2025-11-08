package pl.walas.quiz.service;

import org.springframework.stereotype.Service;
import pl.walas.quiz.model.Category;
import pl.walas.quiz.repository.CategoryRepository;

import java.util.List;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategory() {
        return categoryRepository.findAll();
    }
}
