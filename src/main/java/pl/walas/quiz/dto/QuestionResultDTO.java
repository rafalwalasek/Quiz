package pl.walas.quiz.dto;

public class QuestionResultDTO {
    private Long questionId;
    private String userAnswer;
    private String correctAnswer;

    public QuestionResultDTO() {}

    public Long getQuestionId() {
        return questionId;
    }
    public String getUserAnswer() {
        return userAnswer;
    }
    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }
    public void setUserAnswer(String userAnswer) {
        this.userAnswer = userAnswer;
    }
    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }
}
