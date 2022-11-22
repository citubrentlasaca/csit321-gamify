package com.teknocrats.gamify.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teknocrats.gamify.Entity.ResultEntity;

@Repository
public interface ResultRepository extends JpaRepository<ResultEntity, Integer>{
	ResultEntity findByAssessmentname(String assessmentname);
}
