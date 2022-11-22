package com.teknocrats.gamify.Service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teknocrats.gamify.Entity.AccountEntity;
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
}
