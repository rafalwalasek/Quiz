package pl.walas.quiz.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "results")
public class Result {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private int correctCount;
    private int totalQuestions;
    private double percent;
    private boolean passed;
    private LocalDateTime dateTime;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    public Result() {}

    public Long getId() {
        return id;
    }
    public User getUser() {
        return user;
    }
    public int getCorrectCount() {
        return correctCount;
    }
    public int getTotalQuestions() {
        return totalQuestions;
    }
    public double getPercent() {
        return percent;
    }
    public boolean isPassed() {
        return passed;
    }
    public LocalDateTime getDateTime() {
        return dateTime;
    }
    public Category getCategory() {
        return category;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public void setCorrectCount(int correctCount) {
        this.correctCount = correctCount;
    }
    public void setTotalQuestions(int totalQuestions) {
        this.totalQuestions = totalQuestions;
    }
    public void setPercent(double percent) {
        this.percent = percent;
    }
    public void setPassed(boolean passed) {
        this.passed = passed;
    }
    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }
    public void setCategory(Category category) {
        this.category = category;
    }
}
