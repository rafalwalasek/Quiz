package pl.walas.quiz.model;

import jakarta.persistence.*;

@Entity
@Table(name = "category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String category;

    public Category() {}

    public Long getId() {
        return id;
    }
    public String getCategory() {
        return category;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public void setCategory(String category) {
        this.category = category;
    }
}
