package com.teknocrats.gamify.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity 
@Table(name = "tbl_result")
public class ResultEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int resultid;
	private String assessmentname;
	private int studentscore;
	private int perfectscore;
	private int attempt;
	
	@OneToOne(cascade = {CascadeType.MERGE, CascadeType.REMOVE})
	@JoinColumn(name = "assessmentid")
	private AssessmentEntity assessment;
	
	public ResultEntity() {}

	public ResultEntity(int resultid, String assessmentname, int studentscore, int perfectscore, int attempt, AssessmentEntity assessment) {
		super();
		this.resultid = resultid;
		this.assessmentname = assessmentname;
		this.studentscore = studentscore;
		this.perfectscore = perfectscore;
		this.attempt = attempt;
		this.assessment = assessment;
	}

	public int getResultid() {
		return resultid;
	}

	public void setResultid(int resultid) {
		this.resultid = resultid;
	}

	public String getAssessmentname() {
		return assessmentname;
	}

	public void setAssessmentname(String assessmentname) {
		this.assessmentname = assessmentname;
	}

	public int getStudentscore() {
		return studentscore;
	}

	public void setStudentscore(int studentscore) {
		this.studentscore = studentscore;
	}

	public int getPerfectscore() {
		return perfectscore;
	}

	public void setPerfectscore(int perfectscore) {
		this.perfectscore = perfectscore;
	}

	public int getAttempt() {
		return attempt;
	}

	public void setAttempt(int attempt) {
		this.attempt = attempt;
	}
	
	public AssessmentEntity getAssessment() {
		return assessment;
	}

	public void setAssessment(AssessmentEntity assessment) {
		this.assessment = assessment;
	}
	
}
