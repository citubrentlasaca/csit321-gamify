package com.teknocrats.gamify.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.SQLDelete;

@Entity
@Table(name = "tbl_account")
@SQLDelete(sql = "UPDATE tbl_account SET isdeactivated = true WHERE accountid=?")
public class AccountEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int accountid;
	
	private String username;
	private String email;
	private String password;
	private boolean isdeactivated = Boolean.FALSE;
	
	public AccountEntity() {}
	public AccountEntity(int accountid, String username, String email, String password, boolean isdeactivated) {
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
	
	public boolean getIsdeactivated() {
		return isdeactivated;
	}
	
	public void setIsdeactivated(boolean isdeactivated) {
		this.isdeactivated = isdeactivated;
	}
	
	
}
