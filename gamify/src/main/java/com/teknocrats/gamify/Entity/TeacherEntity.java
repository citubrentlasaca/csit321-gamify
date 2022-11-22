package com.teknocrats.gamify.Entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "tbl_teacher")

public class TeacherEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private int teacherid;
	
	private NameEntity name;
	private String gender;
	
	@Temporal(TemporalType.DATE)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM-dd-yyyy")
	private Date birthday;
	
	private String subjectnumber;
	private String descriptivetitle;
	private String isdeleted;
	
	
	@JoinColumn(name = "accountid")
	private AccountEntity account;
	
	public TeacherEntity () {}

	public TeacherEntity(int teacherid, NameEntity name, String gender, Date birthday, String subjectnumber,
			String descriptivetitle, String isdeleted, AccountEntity account) {
		super();
		this.teacherid = teacherid;
		this.name = name;
		this.gender = gender;
		this.birthday = birthday;
		this.subjectnumber = subjectnumber;
		this.descriptivetitle = descriptivetitle;
		this.isdeleted = isdeleted;
		this.account = account;
	}

	public int getTeacherid() {
		return teacherid;
	}

	public void setTeacherid(int teacherid) {
		this.teacherid = teacherid;
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

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
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
