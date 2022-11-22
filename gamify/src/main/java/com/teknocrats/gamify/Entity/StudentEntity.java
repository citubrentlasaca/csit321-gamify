package com.teknocrats.gamify.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_student")
public class StudentEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int studentid;

	private NameEntity name;
	private String gender;
	private String birthday;
	private String program;
	private int yearlevel;
	private String isdeleted;
	
	@OneToOne
	@JoinColumn(name = "accountid")
	private AccountEntity account;

	public StudentEntity(int studentid, NameEntity name, String gender, String birthday, String program, int yearlevel,
			String isdeleted, AccountEntity account) {
		super();
		this.studentid = studentid;
		this.name = name;
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

	public NameEntity getName() {
		return name;
	}

	public void setName(NameEntity name) {
		this.name = name;
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

	public String getIsdeleted() {
		return isdeleted;
	}

	public void setIsdeleted(String isdeleted) {
		this.isdeleted = isdeleted;
	}

	public AccountEntity getAccount() {
		return account;
	}

	public void setAccount(AccountEntity account) {
		this.account = account;
	}

}
