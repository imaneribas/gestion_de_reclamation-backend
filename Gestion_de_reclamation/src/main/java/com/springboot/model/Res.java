package com.springboot.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
 
public class Res {
	
	@Id
    @GeneratedValue
    @Column(name = "ID_Reservation")
    private Integer ID_Reservation;
    @Column(name = "client_id")
    private Integer client_id;
    @Column(name = "Date")
    private Integer Date;
    @Column(name = "creneau_id")
    private Integer creneau_id;
    @Column(name = "disponibilite_id")
    private Integer disponibilite_id;
    @Column(name = "category_id")
    private Integer category_id;
    @Column(name = "confirmation_id")
    private Integer confirmation_id;

    public Res() {
    }

	public Integer getID_Reservation() {
		return ID_Reservation;
	}

	public void setID_Reservation(Integer iD_Reservation) {
		ID_Reservation = iD_Reservation;
	}

	public Integer getClient_id() {
		return client_id;
	}

	public void setClient_id(Integer client_id) {
		this.client_id = client_id;
	}

	public Integer getDate() {
		return Date;
	}

	public void setDate(Integer date) {
		Date = date;
	}

	public Integer getCreneau_id() {
		return creneau_id;
	}

	public void setCreneau_id(Integer creneau_id) {
		this.creneau_id = creneau_id;
	}

	public Integer getDisponibilite_id() {
		return disponibilite_id;
	}

	public void setDisponibilite_id(Integer disponibilite_id) {
		this.disponibilite_id = disponibilite_id;
	}

	public Integer getCategory_id() {
		return category_id;
	}

	public void setCategory_id(Integer category_id) {
		this.category_id = category_id;
	}

	public Integer getConfirmation_id() {
		return confirmation_id;
	}

	public void setConfirmation_id(Integer confirmation_id) {
		this.confirmation_id = confirmation_id;
	}

   
}
