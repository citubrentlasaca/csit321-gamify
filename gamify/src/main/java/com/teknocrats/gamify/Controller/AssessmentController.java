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

import com.teknocrats.gamify.Entity.AssessmentEntity;
import com.teknocrats.gamify.Service.AssessmentService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/assessment")
public class AssessmentController {
    
    @Autowired
    AssessmentService assessmentService;
    
    //Create or insert an assessment Record
    @PostMapping("/postAssessment")
    public AssessmentEntity insertAssessment(@RequestBody AssessmentEntity assessment) {
    	return assessmentService.insertAssessment(assessment);
    }
    
    //Read all assessment records
    @GetMapping("/getAllAssessments")
    public List<AssessmentEntity> getAllAssessments(){
        return assessmentService.getAllAssessments();
    }
    
    @GetMapping("/getAssessmentId")
	public int getAssessmentId(@RequestParam String title) {
	  return assessmentService.getAssessmentId(title);
	}
    
    //Read an assessment by its corresponding Title
    @GetMapping("/getByTitle")
    public AssessmentEntity findByTitle(@RequestParam String title) throws Exception{
    	return assessmentService.findByTitle(title);
    }
    @GetMapping("/getDescription")
	public String getDescription(@RequestParam String title) {
	  return assessmentService.getDescription(title);
	}
    @GetMapping("/getInstructions")
	public String getInstructions(@RequestParam String title) {
	  return assessmentService.getInstructions(title);
	}
    
    //Update an assessment record
    @PutMapping("/putAssessment")
    public AssessmentEntity putAssessment(@RequestParam int assessmentid, 
    		@RequestBody AssessmentEntity newAssessmentDetails) throws Exception{
    	return assessmentService.putAssessment(assessmentid, newAssessmentDetails);
    }
    
    //Delete an assessment record
    @DeleteMapping("/deleteAssessment/{assessmentid}")
    public String deleteAssessment(@PathVariable int assessmentid) {
    	return assessmentService.deleteAssessment(assessmentid);
    }
}
