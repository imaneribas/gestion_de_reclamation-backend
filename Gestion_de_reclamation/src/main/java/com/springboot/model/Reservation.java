package com.springboot.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.springboot.model.Confirmation;
import com.springboot.model.Creneau;

import com.springboot.model.Disponibilite;

import com.springboot.model.User;
@Entity
public class Reservation {
	
	@Id
    
    @GeneratedValue( strategy= GenerationType.AUTO ) 	
    @Column(name = "ID_reservation")
	@JsonIgnore
	private int ID_reservation;
	@Column(name = "date")
	private Date date;
	
	
	@ManyToOne
	@JoinColumn(name="id_user")
	private User client;
	@ManyToOne
	@JoinColumn(name="id_creneau")
	private Creneau creneau;
	@ManyToOne
	@JoinColumn(name="id_disponibilite")
	private Disponibilite disponiblite;
	@ManyToOne
	@JoinColumn(name="id_confirmation")
	private Confirmation confirmation;
	
	
	

	public int getID_reservation() {
		return ID_reservation;
	}
	public void setID_reservation(int iD_reservation) {
		ID_reservation = iD_reservation;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	
	
	public User getClient() {
		return client;
	}
	public void setClient(User client) {
		this.client = client;
	}
	public Creneau getCreneau() {
		return creneau;
	}
	public void setCreneau(Creneau creneau) {
		this.creneau = creneau;
	}
	public Disponibilite getDisponiblite() {
		return disponiblite;
	}
	public void setDisponiblite(Disponibilite disponiblite) {
		this.disponiblite = disponiblite;
	}
	public Confirmation getConfirmation() {
		return confirmation;
	}
	public void setConfirmation(Confirmation confirmation) {
		this.confirmation = confirmation;
	}
	
	
	
}
