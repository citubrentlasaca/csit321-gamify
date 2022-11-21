package com.teknocrats.gamify.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teknocrats.gamify.Entity.StudentEntity;
import com.teknocrats.gamify.Service.StudentService;

@RestController
@RequestMapping("/student")
public class StudentController {
	
	@Autowired
	StudentService studentService;
	
	@PostMapping("/postStudent")
	public StudentEntity insertStudent(@RequestBody StudentEntity student) {
		return studentService.insertStudent(student);
	}
}
