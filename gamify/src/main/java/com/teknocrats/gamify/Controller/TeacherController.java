package com.teknocrats.gamify.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teknocrats.gamify.Entity.TeacherEntity;
import com.teknocrats.gamify.Service.TeacherService;


@RestController
@RequestMapping("/teacher")
public class TeacherController {
	@Autowired
	TeacherService tserv;
	
	//Read all records
		@GetMapping("/getAllTeachers")
		public List<TeacherEntity> getAllTeachers(){
			return tserv.getAllTeachers();
		}
}
