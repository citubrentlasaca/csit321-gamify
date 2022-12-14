package com.teknocrats.gamify.Service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teknocrats.gamify.Entity.AccountEntity;
import com.teknocrats.gamify.Entity.TeacherEntity;
import com.teknocrats.gamify.Repository.AccountRepository;

@Service
public class AccountService {
	
	@Autowired
	AccountRepository accountRepository;
	
	public AccountEntity insertAccount(AccountEntity account) {
		return accountRepository.save(account);
	}
	
	public List<AccountEntity> getAllAccounts(){
		return accountRepository.findAll();
	}
	
	public AccountEntity findByAccountid(int accountid) {
		if(accountRepository.findByAccountid(accountid) != null) {
			return accountRepository.findByAccountid(accountid);
		}
		else {
			return null;
		}
	}
	
	public AccountEntity findByUsername(String username) {
		if (accountRepository.findByUsername(username)!=null)
			return accountRepository.findByUsername(username);
		else
			return null;
	}
	
	public AccountEntity putAccount(int accountid, AccountEntity newAccountDetails) throws Exception{
			
		AccountEntity account = new AccountEntity();
			
		try {
			account = accountRepository.findById(accountid).get();
	
			account.setUsername(newAccountDetails.getUsername());
			account.setPassword(newAccountDetails.getPassword());
			account.setEmail(newAccountDetails.getEmail());
				
			return accountRepository.save(account);
				
		}catch(NoSuchElementException nex) {
			throw new Exception ("ID Number " + accountid + "does not exist!");
		}
	}
	
	public String deleteAccount(int accountid) {
		String msg;
		if (accountRepository.findById(accountid) != null) {
			accountRepository.deleteById(accountid);
			
			msg = "Account ID Number " + accountid + " is successfully deleted!";
		}
		else {
			msg = "Account ID Number " + accountid + " is NOT found!";
		}
		return msg;
	}

}
