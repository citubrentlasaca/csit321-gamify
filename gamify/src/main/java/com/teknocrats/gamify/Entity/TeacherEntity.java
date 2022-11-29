package com.teknocrats.gamify.Entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_teacher")

public class TeacherEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int teacherid;
	
	private String firstname;
	private String lastname;
	private String gender;
	private String birthday;
	private String subjectnumber;
	private String descriptivetitle;
	private boolean isdeleted = Boolean.FALSE;
	
	@OneToOne(cascade = CascadeType.REMOVE)
	@JoinColumn(name = "accountid")
	private AccountEntity account;
	
	@OneToMany(cascade = CascadeType.MERGE)
    private Set<AssessmentEntity> assessment;
	
	
	public TeacherEntity () {}


	public TeacherEntity(int teacherid, String firstname, String lastname, String gender, String birthday,
			String subjectnumber, String descriptivetitle, boolean isdeleted, AccountEntity account,
			Set<AssessmentEntity> assessment) {
		super();
		this.teacherid = teacherid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.gender = gender;
		this.birthday = birthday;
		this.subjectnumber = subjectnumber;
		this.descriptivetitle = descriptivetitle;
		this.isdeleted = isdeleted;
		this.account = account;
		this.assessment = assessment;
	}


	public int getTeacherid() {
		return teacherid;
	}


	public void setTeacherid(int teacherid) {
		this.teacherid = teacherid;
	}


	public String getFirstname() {
		return firstname;
	}


	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}


	public String getLastname() {
		return lastname;
	}


	public void setLastname(String lastname) {
		this.lastname = lastname;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getBirthday() {
		return birthday;
	}


	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}


	public String getSubjectnumber() {
		return subjectnumber;
	}


	public void setSubjectnumber(String subjectnumber) {
		this.subjectnumber = subjectnumber;
	}


	public String getDescriptivetitle() {
		return descriptivetitle;
	}


	public void setDescriptivetitle(String descriptivetitle) {
		this.descriptivetitle = descriptivetitle;
	}


	public boolean isIsdeleted() {
		return isdeleted;
	}


	public void setIsdeleted(boolean isdeleted) {
		this.isdeleted = isdeleted;
	}


	public AccountEntity getAccount() {
		return account;
	}


	public void setAccount(AccountEntity account) {
		this.account = account;
	}


	public Set<AssessmentEntity> getAssessment() {
		return assessment;
	}


	public void setAssessment(Set<AssessmentEntity> assessment) {
		this.assessment = assessment;
	}


}
