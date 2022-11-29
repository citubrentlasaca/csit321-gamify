package com.teknocrats.gamify.Service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.teknocrats.gamify.Entity.TeacherEntity;
import com.teknocrats.gamify.Repository.TeacherRepository;


@Service 
public class TeacherService {
	@Autowired
	TeacherRepository teacherRepository; 
	
	//C - Create or insert a record 
	public TeacherEntity insertTeacher(TeacherEntity teacher) {
		return teacherRepository.save(teacher);
	}
	
	//R - Read all records from tbl_teacher
	public List<TeacherEntity> getAllTeachers(){
		return teacherRepository.findAll();
	}
	
	//U - Update a record
	public TeacherEntity putTeacher(int teacherid, TeacherEntity newStudentDetails) throws Exception{
		TeacherEntity teacher = new TeacherEntity();
		
		try {
			//steps in updating
			//Step 1 - search the id number of the Teacher
			teacher = teacherRepository.findById(teacherid).get();
			
			//Step 2 - update the record
			teacher.setSubjectnumber(newStudentDetails.getSubjectnumber());
			teacher.setDescriptivetitle(newStudentDetails.getDescriptivetitle());
			
			//Step 3 - save the information and return the value
			return teacherRepository.save(teacher);
		}catch(NoSuchElementException ex) {
			throw new Exception("ID Number " + teacherid + " does not exist!");
		}
	}
	
	//D - Delete teacher record
	public String deleteTeacher (int id) {
		String msg;
		
		if (teacherRepository.findById(id) != null) {
			teacherRepository.deleteById(id);
				
			msg = "Teacher ID Number " + id + " is successfully deleted!";
		}
		else
			msg = "Teacher ID Number " + id + " is NOT found!";
			
				return msg;			
	}
}
