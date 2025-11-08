package pl.walas.quiz.dto;

public class QuestionDTO {
    private Long id;
    private String question_text;
    private String option_a;
    private String option_b;
    private String option_c;
    private String option_d;
    private String correct_option;
    private String category;

    public QuestionDTO() {}

    public Long getId() {
        return id;
    }
    public String getQuestion_text() {
        return question_text;
    }
    public String getOption_a() {
        return option_a;
    }
    public String getOption_b() {
        return option_b;
    }
    public String getOption_c() {
        return option_c;
    }
    public String getOption_d() {
        return option_d;
    }
    public String getCorrect_option() {
        return correct_option;
    }
    public String getCategory() {
        return category;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public void setQuestion_text(String question_text) {
        this.question_text = question_text;
    }
    public void setOption_a(String option_a) {
        this.option_a = option_a;
    }
    public void setOption_b(String option_b) {
        this.option_b = option_b;
    }
    public void setOption_c(String option_c) {
        this.option_c = option_c;
    }
    public void setOption_d(String option_d) {
        this.option_d = option_d;
    }
    public void setCorrect_option(String correct_option) {
        this.correct_option = correct_option;
    }
    public void setCategory(String category) {
        this.category = category;
    }
}
