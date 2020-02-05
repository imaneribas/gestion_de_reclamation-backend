package com.springboot.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Creneau {

	@Id
    
    @GeneratedValue( strategy= GenerationType.AUTO ) 	
    @Column(name = "ID_creneau")
	private int ID_creneau;
	@Column(name = "horaire")
	private Timestamp horaire;
	public int getID_creneau() {
		return ID_creneau;
	}
	public void setID_creneau(int iD_creneau) {
		ID_creneau = iD_creneau;
	}
	public Timestamp getHoraire() {
		return horaire;
	}
	public void setHoraire(Timestamp horaire) {
		this.horaire = horaire;
	}
	
	
	
}
