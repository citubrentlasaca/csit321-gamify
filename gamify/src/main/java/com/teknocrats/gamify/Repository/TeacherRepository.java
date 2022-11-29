package com.teknocrats.gamify.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teknocrats.gamify.Entity.ItemEntity;
import com.teknocrats.gamify.Entity.TeacherEntity;

@Repository
public interface TeacherRepository extends JpaRepository<TeacherEntity, Integer>{
	TeacherEntity findByTeacherid(int teacherid);
}
