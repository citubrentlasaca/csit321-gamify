package com.teknocrats.gamify.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.teknocrats.gamify.Entity.ItemEntity;
import com.teknocrats.gamify.Entity.ResultEntity;
import com.teknocrats.gamify.Entity.TeacherEntity;
import com.teknocrats.gamify.Service.TeacherService;


@RestController
@CrossOrigin(origins = "*")
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
	
	
	@GetMapping("/getByTeacherid")
	public TeacherEntity findByTeacherid(@RequestParam int teacherid) {
		return tserv.findByTeacherid(teacherid);
	}
	
	
	@PutMapping("/putTeacher")
	public TeacherEntity putTeacher(@RequestParam int teacherid, @RequestBody TeacherEntity newTeacherDetails) throws Exception {
		return tserv.putTeacher(teacherid, newTeacherDetails);
		}
	
	@DeleteMapping("/deleteTeacher/{teacherid}")
	public String deleteTeacher (@PathVariable int teacherid) {
		return tserv.deleteTeacher(teacherid);
	}
}
