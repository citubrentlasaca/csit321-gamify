package com.teknocrats.gamify.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.teknocrats.gamify.Entity.AccountEntity;

@RestController
@RequestMapping("/account")

public class AccountController {
	@Autowired
	AccountService acctserv;
	
	//Create or insert account record
	@PostMapping("/postAccount")
	public AccountEntity insertAccount(@RequestBody AccountEntity account) {
		return acctserv.insertAccount(account);
	}
	
	//Read all records
	@GetMapping("/getAllAccounts")
	public List<AccountEntity> getAllAccounts(){
		return acctserv.getAllAccounts();
	}
	
	//Read a record by Username
	@GetMapping("getByUsername")
		public AccountEntity findByUsername(@RequestParam String username) {
			return acctserv.FindByUserName(username);
	}
	
	//Update a record
	@PutMapping("/putAccount")
	public AccountEntity putAccount(@RequestParam int accountid, @RequestBody AccountEntity newAccountDetails) throws Exception {
		return acctserv.putAccount(accountid, newAccountDetails);
	}
	
	//Delete a record
	@DeleteMapping("/deleteAccount/{accountid}")
	public String deleteAccount (@PathVariable int accountid) {
		return acctserv.deleteAccount(accountid);
	}
}
