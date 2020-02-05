package com.springboot.service;




import com.springboot.model.Reservation;


import org.springframework.data.jpa.repository.JpaRepository;


public interface ReservationService extends JpaRepository<Reservation, Integer> {
	 
}
