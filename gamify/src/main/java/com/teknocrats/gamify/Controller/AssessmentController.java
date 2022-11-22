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

import com.teknocrats.gamify.Entity.AssessmentEntity;
import com.teknocrats.gamify.Service.AssessmentService;


@RestController
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
}
