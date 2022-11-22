package com.teknocrats.gamify.Service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teknocrats.gamify.Entity.AssessmentEntity;
import com.teknocrats.gamify.Repository.AssessmentRepository;

@Service
public class AssessmentService {
	
	/* contains all the business logic of the app
	 * Create an assessment record
	 * Read assessment by assessmentid or title
	 * Update an assessment record
	 * Delete an assessment record
	 **/
	
	@Autowired
	AssessmentRepository assessmentRepository;
	
		//Create or insert an assessment record 
		public AssessmentEntity insertAssessment(AssessmentEntity assessment) {
			return assessmentRepository.save(assessment);
		}
		
		//Read all assessment records from the table named tbl_assessment
		public List<AssessmentEntity> getAllAssessments(){
			return assessmentRepository.findAll();
		}
}
