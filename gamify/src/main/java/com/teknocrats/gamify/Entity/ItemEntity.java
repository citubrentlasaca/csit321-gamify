package com.teknocrats.gamify.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_item", schema ="db_teknocrats_gamify")
public class ItemEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int itemid;
	private String questiontype;
	private int timer;
	private String question;
	private String answer;
	private String isdeleted;
	
	public ItemEntity() {}
	public ItemEntity(int itemid, String questiontype, int timer, String question, String answer, String isdeleted) {
		super();
		this.itemid = itemid;
		this.questiontype = questiontype;
		this.timer = timer;
		this.question = question;
		this.answer = answer;
		this.isdeleted = isdeleted;
	}
	
	public int getItemid() {
		return itemid;
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
	public String getIsdeleted() {
		return isdeleted;
	}
	public void setIsdeleted(String isdeleted) {
		this.isdeleted = isdeleted;
	}
}
