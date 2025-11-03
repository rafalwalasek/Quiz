package pl.walas.quiz.dto;

import java.time.LocalDateTime;
import java.util.List;

public class ResultDTO {
    private int correctCount;
    private int totalQuestions;
    private double percent;
    private boolean passed;
    private Long userId;
    private Long quizId;
    private LocalDateTime dateTaken;
    private List<QuestionResultDTO> questionResults;

    public ResultDTO() {}

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
    public Long getUserId() {
        return userId;
    }
    public Long getQuizId() {
        return quizId;
    }
    public LocalDateTime getDateTaken() {
        return dateTaken;
    }
    public List<QuestionResultDTO> getQuestionResults() {
        return questionResults;
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
    public void setUserId(Long userId) {
        this.userId = userId;
    }
    public void setQuizId(Long quizId) {
        this.quizId = quizId;
    }
    public void setDateTaken(LocalDateTime dateTaken) {
        this.dateTaken = dateTaken;
    }
    public void setQuestionResults(List<QuestionResultDTO> questionResults) {
        this.questionResults = questionResults;
    }
}
