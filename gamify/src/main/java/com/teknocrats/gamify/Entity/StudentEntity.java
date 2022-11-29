package com.teknocrats.gamify.Entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

@Entity
@Table(name = "tbl_student")
@SQLDelete(sql = "UPDATE tbl_student SET isdeleted = true WHERE studentid=?")
@Where(clause = "isdeleted = false")
public class StudentEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int studentid;
	
	private String firstname;
	private String lastname;
	private String gender;
	private String birthday;
	private String program;
	private int yearlevel;
	private boolean isdeleted = Boolean.FALSE;
	
	@OneToOne(cascade = CascadeType.REMOVE)
	@JoinColumn(name = "accountid")
	private AccountEntity account;

	public StudentEntity() {}
	
	public StudentEntity(int studentid, String firstname, String lastname, String gender, String birthday, String program,
			int yearlevel, boolean isdeleted, AccountEntity account) {
		super();
		this.studentid = studentid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.gender = gender;
		this.birthday = birthday;
		this.program = program;
		this.yearlevel = yearlevel;
		this.isdeleted = isdeleted;
		this.account = account;
	}


	public int getStudentid() {
		return studentid;
	}


	public void setStudentid(int studentid) {
		this.studentid = studentid;
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


	public String getProgram() {
		return program;
	}


	public void setProgram(String program) {
		this.program = program;
	}


	public int getYearlevel() {
		return yearlevel;
	}


	public void setYearlevel(int yearlevel) {
		this.yearlevel = yearlevel;
	}


	public boolean getIsdeleted() {
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
}
