package com.teknocrats.gamify.Entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

@Entity
@Table(name = "tbl_assessment", schema ="db_teknocrats_gamify")
@SQLDelete(sql = "UPDATE tbl_assessment SET isdeleted = true WHERE assessmentid=?")
@Where(clause = "isdeleted = false")
public class AssessmentEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int assessmentid;
		
	private String title;
	private String instructions;
	private String description;
	private Boolean isdeleted = Boolean.FALSE;
	
	@ManyToOne()
	@JoinColumn(name="teacherid")
	TeacherEntity teacher;
	
	@OneToMany(cascade = {CascadeType.MERGE, CascadeType.REMOVE})
	private Set<ItemEntity> item;
		
	public AssessmentEntity () {}

	public AssessmentEntity(int assessmentid, String title, String instructions, String description, boolean isdeleted, TeacherEntity teacher, Set<ItemEntity> item) {
		super();
		this.assessmentid = assessmentid;
		this.title = title;
		this.instructions = instructions;
		this.description = description;
		this.isdeleted = isdeleted;
		this.teacher = teacher;
		this.item = item;
	}
		
	public int getAssessmentid() {
		return assessmentid;
	}

	public void setAssessmentid(int assessmentid) {
		this.assessmentid = assessmentid;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getInstructions() {
		return instructions;
	}

	public void setInstructions(String instructions) {
		this.instructions = instructions;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
		
	public boolean getIsdeleted() {
		return isdeleted;
	}

	public void setIsdeleted(boolean isdeleted) {
		this.isdeleted = isdeleted;
	}
	public TeacherEntity getTeacher() {
		return teacher;
	}
	public void setTeacher(TeacherEntity teacher) {
		this.teacher = teacher;
	}
	public Set<ItemEntity> getItem() {
		return item;
	}
	public void setItem(Set<ItemEntity> item) {
		this.item = item;
	}
}
