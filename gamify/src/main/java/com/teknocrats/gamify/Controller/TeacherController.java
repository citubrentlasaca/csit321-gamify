package com.teknocrats.gamify.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spcahutay.sims.Entity.StudentEntity;
import com.teknocrats.gamify.Entity.TeacherEntity;
import com.teknocrats.gamify.Service.TeacherService;


@RestController
@RequestMapping("/teacher")
public class TeacherController {
	@Autowired
	TeacherService tserv;
	
	@PostMapping("/postTeacher")
	public TeacherEntity insertTeacher(@RequestBody TeacherEntity teacher) {
		return tserv.insertTeacher(teacher);
	}
	

	@GetMapping("/getAllTeachers")
	public List<TeacherEntity> getAllTeachers(){
		return tserv.getAllTeachers();
	}
}
