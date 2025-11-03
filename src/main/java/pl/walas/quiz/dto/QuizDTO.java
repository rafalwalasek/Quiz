package pl.walas.quiz.dto;

import java.util.Map;

public class QuizDTO {
    private String userEmail;
    private Map<Long, String> userAnswers;

    public QuizDTO() {}

    public String getUserEmail() {
        return userEmail;
    }
    public Map<Long, String> getUserAnswers() {
        return userAnswers;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }
    public void setUserAnswers(Map<Long, String> userAnswers) {
        this.userAnswers = userAnswers;
    }
}
