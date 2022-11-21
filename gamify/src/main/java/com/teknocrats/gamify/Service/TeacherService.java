package com.teknocrats.gamify.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teknocrats.gamify.Entity.TeacherEntity;
import com.teknocrats.gamify.Repository.TeacherRepository;


@Service 
public class TeacherService {
	@Autowired
	TeacherRepository trepo; 
	
	//C - Create or insert a record 
	public TeacherEntity insertTeacher(TeacherEntity teacher) {
		return trepo.save(teacher);
	}
		
}
