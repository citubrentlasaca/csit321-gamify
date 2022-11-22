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
		
		public AssessmentEntity () {}

		public AssessmentEntity(int assessmentid, String title, String instructions, String description, String isdeleted) {
			super();
			this.assessmentid = assessmentid;
			this.title = title;
			this.instructions = instructions;
			this.description = description;
			this.isdeleted = isdeleted;
		}
		
		public int getAssessmentid() {
			return assessmentid;
		}

		public void setAssessmentid(int assessmentid) {
			this.assessmentid = assessmentid;
		}

		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public String getInstructions() {
			return instructions;
		}

		public void setInstructions(String instructions) {
			this.instructions = instructions;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}
		
		public String getIsdeleted() {
			return isdeleted;
		}

		public void setIsdeleted(String isdeleted) {
			this.isdeleted = isdeleted;
		}
}
