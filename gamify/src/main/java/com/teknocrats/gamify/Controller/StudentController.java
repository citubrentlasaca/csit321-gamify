package com.teknocrats.gamify.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	@GetMapping("/getAllStudents")
	public List<StudentEntity> getAllStudents(){
		return studentService.getAllStudents();
	}
	
	@GetMapping("/getByStudentId")
	public StudentEntity findByStudentId(@RequestParam int studentid) {
		return studentService.findByStudentId(studentid);
	}
	
	@PutMapping("/putStudent")
	public StudentEntity putStudent(@RequestParam int studentid, @RequestBody StudentEntity newStudentDetails) throws Exception{
		return studentService.putStudent(studentid, newStudentDetails);
	}
	
	@DeleteMapping("/deleteStudent/{studentid}")
	public String deleteStudent(@PathVariable int studentid) {
		return studentService.deleteStudent(studentid);
	}
}
