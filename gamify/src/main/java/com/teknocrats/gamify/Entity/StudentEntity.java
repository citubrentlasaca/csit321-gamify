package com.teknocrats.gamify.Entity;

public class StudentEntity {
	
	private int studentid;
	private AccountEntity account;
	private NameEntity name;
	private String gender;
	private String birthday;
	private String program;
	private int yearlevel;
	private String isdeleted;
	
	public StudentEntity(int studentid, AccountEntity account, NameEntity name, String gender, String birthday,
			String program, int yearlevel, String isdeleted) {
		super();
		this.studentid = studentid;
		this.account = account;
		this.name = name;
		this.gender = gender;
		this.birthday = birthday;
		this.program = program;
		this.yearlevel = yearlevel;
		this.isdeleted = isdeleted;
	}

	public int getStudentid() {
		return studentid;
	}

	public void setStudentid(int studentid) {
		this.studentid = studentid;
	}

	public AccountEntity getAccount() {
		return account;
	}

	public void setAccount(AccountEntity account) {
		this.account = account;
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
	
}
