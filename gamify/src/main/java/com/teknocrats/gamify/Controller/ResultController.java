package com.teknocrats.gamify.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.teknocrats.gamify.Entity.ResultEntity;
import com.teknocrats.gamify.Service.ResultService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/result")
public class ResultController {
	
	@Autowired
	ResultService resultserv;
	
	// Create or insert a student result record
	@PostMapping("/postResult")
	public ResultEntity insertResult(@RequestBody ResultEntity result) {
		return resultserv.insertResult(result);
	} 
	 
	// Read all records
	@GetMapping("/getAllResult")
	public List <ResultEntity> getAllResult(){
		return resultserv.getAllResult();
	}
	
	// Read a record by assessment name
	@GetMapping("/getByResultid")
	public ResultEntity findByResultid(@RequestParam int resultid) {
		return resultserv.findByResultid(resultid);
	}
	
    //Read result by its corresponding id
    @GetMapping("/getResultId")
    public int getResultId(@RequestParam int resultid) throws Exception{
    	return resultserv.getStudentResultId(resultid);
    }
    @GetMapping("/getAttempt")
	public int getAttempt(@RequestParam int resultid) {
	  return resultserv.getAttempt(resultid);
	}
    @GetMapping("/getStudentScore")
	public int getStudentScore(@RequestParam int resultid) {
	  return resultserv.getStudentScore(resultid);
	}
    
    @GetMapping("/getPerfectScore")
	public int getPerfectScore(@RequestParam int resultid) {
	  return resultserv.getPerfectScore(resultid);
	}
	
	// Update a record
	@PutMapping("/putResult")
	public ResultEntity putResult(@RequestParam int resultid, @RequestBody ResultEntity newResultDetails) throws Exception{
		return resultserv.putResult(resultid, newResultDetails);
	}
	
	// Delete a record
	@DeleteMapping("/deleteResult/{resultid}")
	public String deleteResult(@PathVariable int resultid) {
		return resultserv.deleteResult(resultid);
	}
	
}
