package com.teknocrats.gamify.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teknocrats.gamify.Entity.ResultEntity;
import com.teknocrats.gamify.Repository.ResultRepository;

@Service
public class ResultService {
	@Autowired
	ResultRepository resultrepo;

	// C - Create or insert a result record
	public ResultEntity insertResult(ResultEntity result) {
		return resultrepo.save(result);
	}

	// R - Read all records from the table named tbl_result
	public List<ResultEntity> getAllResult(){
		return resultrepo.findAll();
	}

}
