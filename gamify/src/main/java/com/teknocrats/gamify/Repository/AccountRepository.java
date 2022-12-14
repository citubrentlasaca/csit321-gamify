package com.teknocrats.gamify.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teknocrats.gamify.Entity.AccountEntity;
import com.teknocrats.gamify.Entity.TeacherEntity;

@Repository
public interface AccountRepository extends JpaRepository<AccountEntity, Integer>{
	AccountEntity findByAccountid(int accountid);
	AccountEntity findByUsername(String username);
}
