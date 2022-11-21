package com.teknocrats.gamify.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teknocrats.gamify.Entity.StudentEntity;
import com.teknocrats.gamify.Repository.StudentRepository;

@Service
public class StudentService {
	
	@Autowired
	StudentRepository studentRepository;
	
	public StudentEntity insertStudent(StudentEntity student) {
		return studentRepository.save(student);
	}
	
	public List<StudentEntity> getAllStudents(){
		return studentRepository.findAll();
	}
	
	public String deleteStudent(int id) {
		String msg;
		
		if (studentRepository.findById(id) != null) {
			studentRepository.deleteById(id);
			
			msg = "Student ID Number " + id + " is successfully deleted!";
		}
		else {
			msg = "Student ID Number " + id + " is NOT found!";
		}
		return msg;
	}
}
