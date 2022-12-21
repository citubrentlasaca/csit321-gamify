package com.teknocrats.gamify.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.teknocrats.gamify.Entity.AssessmentEntity;

@Repository
public interface AssessmentRepository extends JpaRepository<AssessmentEntity, Integer>{
	//user-defined query
	AssessmentEntity findByTitle(String title);
	
	@Query(value = "SELECT assessmentid FROM tbl_assessment WHERE title = ?1", nativeQuery = true)
	int findAssessmentIdByTitle(String title);
	
	@Query(value = "SELECT description FROM tbl_assessment WHERE title = ?1", nativeQuery = true)
	String findDesciptionByTitle(String title);
	
	@Query(value = "SELECT instructions FROM tbl_assessment WHERE title = ?1", nativeQuery = true)
	String findInstructionsByTitle(String title);
}
