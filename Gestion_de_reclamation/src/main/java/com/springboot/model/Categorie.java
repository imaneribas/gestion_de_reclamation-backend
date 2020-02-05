package com.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Categorie {
	@Id
    
    @GeneratedValue( strategy= GenerationType.AUTO ) 	
    @Column(name = "ID_categorie")
	private int ID_categorie;
	@Column(name = "typecateg")
	private String typecateg;
	
	public int getID_categorie() {
		return ID_categorie;
	}
	public void setID_categorie(int iD_categorie) {
		ID_categorie = iD_categorie;
	}
	public String getTypecateg() {
		return typecateg;
	}
	public void setTypecateg(String typecateg) {
		this.typecateg = typecateg;
	}
	
	
	
	
	
	
	
}
