package com.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Confirmation {

	@Id
    
    @GeneratedValue( strategy= GenerationType.AUTO ) 	
    @Column(name = "ID_confirmation")

	private int ID_confirmation;
	 @Column(name = "typeconfi")
	private String typeconfi;
	
	public int getID_confirmation() {
		return ID_confirmation;
	}
	public void setID_confirmation(int iD_confirmation) {
		ID_confirmation = iD_confirmation;
	}
	public String getTypeconfi() {
		return typeconfi;
	}
	public void setTypeconfi(String typeconfi) {
		this.typeconfi = typeconfi;
	}
	
}
