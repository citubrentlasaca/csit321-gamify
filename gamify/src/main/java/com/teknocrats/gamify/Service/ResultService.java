package com.teknocrats.gamify.Service;

import java.util.List;
import java.util.NoSuchElementException;

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

	// R - Read or search result record by assessmentname
	public ResultEntity findByAssessmentname(String assessmentname) {
		if (resultrepo.findByAssessmentname(assessmentname) != null)
			return resultrepo.findByAssessmentname(assessmentname);
		else
			return null;
	}

	// U - Update a student result record
	public ResultEntity putResult(int resultid, ResultEntity newResultDetails) throws Exception{
		
		ResultEntity result = new ResultEntity();
			
		try {
			// steps in updating
			// Step 1 - search the result id number of the student
			result = resultrepo.findById(resultid).get(); //finById() is a pre-defined method
				
			//Step 2 - update the record
			result.setStudentscore(newResultDetails.getStudentscore());
			result.setAttempt(newResultDetails.getAttempt());
				
			//Step 3 - save the information and return the value
			return resultrepo.save(result);
				
			} catch (NoSuchElementException nex){
				throw new Exception("Result ID Number " + resultid + " does not exist!");
		}
					
	}

	// D - Delete result record
	public String deleteResult(int resultid) {
		String msg;
		if (resultrepo.findById(resultid) != null) {
			resultrepo.deleteById(resultid);
			msg = "Result ID Number " + resultid + " is successfully deleted!";
		} else {
	 		msg = "Result ID Number " + resultid + " is NOT found!";
	 	}
		return msg;
	}
}
