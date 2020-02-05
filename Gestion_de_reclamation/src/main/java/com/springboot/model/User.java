package com.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.springboot.model.Role;
@Entity

public class User {
	@Id
    
    @GeneratedValue( strategy= GenerationType.AUTO ) 	
    @Column(name = "ID_User")
	private int ID_User;
	 @Column(name = "Nom")
	   private String Nom;
	 @Column(name = "Prenom")
	   private String Prenom;
	 @Column(name = "Email")
	   private String Email;
	 @Column(name = "Phone")
		private int Phone;

	 @ManyToOne
		   private Role role;


		public User() {
			super();

		}


		public User(int iD_User, String nom, String prenom, String email, int phone) {
			super();
			ID_User = iD_User;
			Nom = nom;
			Prenom = prenom;
			Email = email;
			Phone = phone;
		}


		public int getID_User() {
			return ID_User;
		}


		public void setID_User(int iD_User) {
			ID_User = iD_User;
		}


		public String getNom() {
			return Nom;
		}


		public void setNom(String nom) {
			Nom = nom;
		}


		public String getPrenom() {
			return Prenom;
		}


		public void setPrenom(String prenom) {
			Prenom = prenom;
		}


		public String getEmail() {
			return Email;
		}


		public void setEmail(String email) {
			Email = email;
		}


		public int getPhone() {
			return Phone;
		}


		public void setPhone(int phone) {
			Phone = phone;
		}


		public Role getRole() {
			return role;
		}


		public void setRole(Role role) {
			this.role = role;
		}


		


		 
		   

}
