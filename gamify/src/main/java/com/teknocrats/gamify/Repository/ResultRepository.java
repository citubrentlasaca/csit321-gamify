package com.teknocrats.gamify.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.teknocrats.gamify.Entity.ResultEntity;

@Repository
public interface ResultRepository extends JpaRepository<ResultEntity, Integer>{
	ResultEntity findByResultid(int resultid);
	
	@Query(value = "SELECT resultid FROM tbl_result WHERE resultid = ?1", nativeQuery = true)
	int findStudentResultId(int resultid);
	
	@Query(value = "SELECT attempt FROM tbl_result WHERE resultid = ?1", nativeQuery = true)
	int findAttepmt(int resultid);
	
	@Query(value = "SELECT studentscore FROM tbl_result WHERE resultid = ?1", nativeQuery = true)
	int findStudentScore(int resultid);
	
	@Query(value = "SELECT perfectscore FROM tbl_result WHERE resultid = ?1", nativeQuery = true)
	int findPerfectScore(int resultid);
}
