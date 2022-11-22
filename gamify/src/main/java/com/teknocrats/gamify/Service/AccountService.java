package com.teknocrats.gamify.Service;

import java.util.List;

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
}
