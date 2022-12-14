package com.teknocrats.gamify.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

@Entity
@Table(name = "tbl_item")
@SQLDelete(sql = "UPDATE tbl_item SET isdeleted = true WHERE itemid=?")
@Where(clause = "isdeleted = false")
public class ItemEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "itemid")
	private int itemid;
	private String questiontype;
	private int timer;
	@Column(name = "question")
	private String question;
	private String answer;
	private String choiceone;
	private String choicetwo;
	private String choicethree;
	private Boolean isdeleted = Boolean.FALSE;
	
	@ManyToOne
	@JoinColumn(name = "assessmentid")
	AssessmentEntity assessment;
	
	public ItemEntity() {}
	public ItemEntity(int itemid, String questiontype, int timer, String question, String answer, String choiceone,
			String choicetwo, String choicethree, Boolean isdeleted, AssessmentEntity assessment) {
		super();
		this.itemid = itemid;
		this.questiontype = questiontype;
		this.timer = timer;
		this.question = question;
		this.answer = answer;
		this.choiceone = choiceone;
		this.choicetwo = choicetwo;
		this.choicethree = choicethree;
		this.isdeleted = isdeleted;
		this.assessment = assessment;
	}
	
	public int getItemid() {
		return itemid;
	}
	public void setItemid(int itemid) {
		this.itemid = itemid;
	}
	public String getQuestiontype() {
		return questiontype;
	}
	public void setQuestiontype(String questiontype) {
		this.questiontype = questiontype;
	}
	public int getTimer() {
		return timer;
	}
	public void setTimer(int timer) {
		this.timer = timer;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	public String getChoiceone() {
		return choiceone;
	}
	public void setChoiceone(String choiceone) {
		this.choiceone = choiceone;
	}
	public String getChoicetwo() {
		return choicetwo;
	}
	public void setChoicetwo(String choicetwo) {
		this.choicetwo = choicetwo;
	}
	public String getChoicethree() {
		return choicethree;
	}
	public void setChoicethree(String choicethree) {
		this.choicethree = choicethree;
	}
	public boolean getIsdeleted() {
		return isdeleted;
	}
	public void setIsdeleted(boolean isdeleted) {
		this.isdeleted = isdeleted;
	}
	public AssessmentEntity getAssessment() {
		return assessment;
	}
	public void setAssessment(AssessmentEntity assessment) {
		this.assessment = assessment;
	}
}
