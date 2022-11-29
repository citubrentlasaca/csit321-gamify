package com.teknocrats.gamify.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;


@Entity 
@Table(name = "tbl_result")
@SQLDelete(sql = "UPDATE tbl_result SET isdeleted = true WHERE resultid=?")
@Where(clause = "isdeleted = false")
public class ResultEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int resultid;
	private int studentscore;
	private int perfectscore;
	private int attempt;
	private boolean isdeleted = Boolean.FALSE;
	
	@OneToOne(cascade = {CascadeType.MERGE})
	@JoinColumn(name = "studentid")
	private StudentEntity student;
	
	@OneToOne(cascade = {CascadeType.MERGE})
	@JoinColumn(name = "assessmentid")
	private AssessmentEntity assessment;
	
	public ResultEntity() {}

	public ResultEntity(int resultid, int studentscore, int perfectscore, int attempt, boolean isdeleted, StudentEntity student, AssessmentEntity assessment) {
		super();
		this.resultid = resultid;
		this.studentscore = studentscore;
		this.perfectscore = perfectscore;
		this.attempt = attempt;
		this.isdeleted = isdeleted;
		this.student = student;
		this.assessment = assessment;
	}

	public int getResultid() {
		return resultid;
	}

	public void setResultid(int resultid) {
		this.resultid = resultid;
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
	
	public boolean getIsDeleted() {
		return isdeleted;
	}

	public void setIsDeleted(boolean isdeleted) {
		this.isdeleted = isdeleted;
	}
	
	public StudentEntity getStudent() {
		return student;
	}

	public void setStudent(StudentEntity student) {
		this.student = student;
	}
	
	public AssessmentEntity getAssessment() {
		return assessment;
	}

	public void setAssessment(AssessmentEntity assessment) {
		this.assessment = assessment;
	}
	
}
