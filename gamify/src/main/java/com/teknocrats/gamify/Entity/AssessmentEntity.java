package com.teknocrats.gamify.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_assessment", schema ="db_teknocrats_gamify")
public class AssessmentEntity {
	
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int assessmentid;
		
		private String title;
		private String instructions;
		private String description;
		private String isdeleted;
	
}
