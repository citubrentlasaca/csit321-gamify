package com.teknocrats.gamify.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_account")

public class AccountEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int accountid;
	
	private String username;
	private String email;
	private String password;
	private String isdeactivated = "No";
	
	public AccountEntity() {}
	public AccountEntity(int accountid, String username, String email, String password, String isdeactivated) {
		super();
		this.accountid = accountid;
		this.username = username;
		this.email = email;
		this.password = password;
		this.isdeactivated = isdeactivated;
	}
	public int getAccountid() {
		return accountid;
	}
	
	public String getUsername() {
		return username;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getIsdeactivated() {
		return isdeactivated;
	}
	
	public void setIsdeactivated(String isdeactivated) {
		this.isdeactivated = isdeactivated;
	}
	
	
}
