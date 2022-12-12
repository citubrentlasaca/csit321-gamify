package com.teknocrats.gamify.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import com.teknocrats.gamify.Entity.ItemEntity;

@Repository
public interface ItemRepository extends JpaRepository<ItemEntity, Integer>{
	ItemEntity findByItemid(int itemid);
	@Query(value = "SELECT itemid FROM tbl_item WHERE question = ?1", nativeQuery = true)
	int findItemIdByQuestion(String question);
	
	@Query(value = "SELECT timer FROM tbl_item WHERE itemid = ?1", nativeQuery = true)
	int findTimerByItemid(int itemid);
	
	@Query(value = "SELECT question FROM tbl_item WHERE itemid = ?1", nativeQuery = true)
	String findQuestionByItemid(int itemid);
	
	@Query(value = "SELECT answer FROM tbl_item WHERE itemid = ?1", nativeQuery = true)
	String findAnswerByItemid(int itemid);
	
	@Query(value = "SELECT choiceone FROM tbl_item WHERE itemid = ?1", nativeQuery = true)
	String findChoiceoneByItemid(int itemid);
	
	@Query(value = "SELECT choicetwo FROM tbl_item WHERE itemid = ?1", nativeQuery = true)
	String findChoicetwoByItemid(int itemid);
	
	@Query(value = "SELECT choicethree FROM tbl_item WHERE itemid = ?1", nativeQuery = true)
	String findChoicethreeByItemid(int itemid);
	
}
