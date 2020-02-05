package com.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Role {
@Id
    
    @GeneratedValue( strategy= GenerationType.AUTO ) 	
    @Column(name = "ID_tablerole")

	private int ID_tablerole;
@Column(name = "typerole")
	private String typerole;
	
	public int getID_tablerole() {
		return ID_tablerole;
	}
	public void setID_tablerole(int iD_tablerole) {
		ID_tablerole = iD_tablerole;
	}
	public String getTyperole() {
		return typerole;
	}
	public void setTyperole(String typerole) {
		this.typerole = typerole;
	}
	
	
}
