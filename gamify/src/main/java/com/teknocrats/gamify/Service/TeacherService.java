package com.teknocrats.gamify.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spcahutay.sims.Entity.StudentEntity;
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
	
	//R - Read all records from tbl_teacher
	public List<TeacherEntity> getAllTeachers(){
		return trepo.findAll();
	}		
	
	//D - Delete teacher record
	public String deleteTeacher (int id) {
		String msg;
		
		if (trepo.findById(id) != null) {
			trepo.deleteById(id);
				
			msg = "Teacher ID Number " + id + " is successfully deleted!";
		}
		else
			msg = "Teacher ID Number " + id + " is NOT found!";
			
				return msg;			
	}
}
