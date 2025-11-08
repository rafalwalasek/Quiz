package pl.walas.quiz.dto;

import java.util.List;

public class ResultDTO {
    private int correctCount;
    private int totalQuestions;
    private double percent;
    private boolean passed;
    private Long userId;
    private Long quizId;
    private List<QuestionResultDTO> questionResults;
    private String category;

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
    public List<QuestionResultDTO> getQuestionResults() {
        return questionResults;
    }
    public String getCategory() {
        return category;
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
    public void setQuestionResults(List<QuestionResultDTO> questionResults) {
        this.questionResults = questionResults;
    }
    public void setCategory(String category) {
        this.category = category;
    }
}
