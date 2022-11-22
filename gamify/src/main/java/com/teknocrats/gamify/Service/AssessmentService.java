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
		
	//Read or search an assessment record by title
	public AssessmentEntity findByTitle(String title) {
		if(assessmentRepository.findByTitle(title) != null)
			return assessmentRepository.findByTitle(title);
		else 
			return null;
	}
		
	//Update an assessment record
	public AssessmentEntity putAssessment(int id, AssessmentEntity newAssessmentDetails) throws Exception {
		AssessmentEntity assessment = new AssessmentEntity();
					
			try {
				//Step 1 - search the id number of the assessment
				assessment = assessmentRepository.findById(id).get();
						
				//Step 2 - update the title, instructions, description and isdeleted
				assessment.setTitle(newAssessmentDetails.getTitle());
				assessment.setInstructions(newAssessmentDetails.getInstructions());
				assessment.setDescription(newAssessmentDetails.getDescription());
				assessment.setIsdeleted(newAssessmentDetails.getIsdeleted());
						
				//Step 3 - save the info and return its corresponding value 
				return assessmentRepository.save(assessment);
					
			}
			catch (NoSuchElementException ex) {
				throw new Exception("ID number " + id + " does not exist.");
			}
	}
		
	//Delete an assessment record
	public String deleteAssessment (int id) {
		String msg;
					
			if(assessmentRepository.findById(id) != null) {
				assessmentRepository.deleteById(id);
						
				msg = "Assessment with an ID Number " + id + " is successfully deleted!";
			}
			else {
				msg = "Assessment with an ID Number " + id + " is NOT found!";
			}
				return msg;
	}
}
