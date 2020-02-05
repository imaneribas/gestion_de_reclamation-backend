package com.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Disponibilite {

	@Id
    
    @GeneratedValue( strategy= GenerationType.AUTO ) 	
    @Column(name = "ID_disponibilite")
	private int ID_disponibilite;
	@Column(name = "typedispo")
	private String typedispo;
	
	public int getID_disponibilite() {
		return ID_disponibilite;
	}
	public void setID_disponibilite(int iD_disponibilite) {
		ID_disponibilite = iD_disponibilite;
	}
	public String getTypedispo() {
		return typedispo;
	}
	public void setTypedispo(String typedispo) {
		this.typedispo = typedispo;
	}
	
	
	
	
}
