package com.teknocrats.gamify.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.teknocrats.gamify.Entity.ItemEntity;

@Repository
public interface ItemRepository extends JpaRepository<ItemEntity, Integer>{
	ItemEntity findByItemid(int itemid);
	@Query(value = "SELECT itemid FROM tbl_item WHERE question = ?1", nativeQuery = true)
	int findItemIdByQuestion(String question);
}
