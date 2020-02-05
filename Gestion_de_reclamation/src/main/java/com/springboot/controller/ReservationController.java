package com.springboot.controller;



import com.springboot.model.Reservation;


import java.util.List;
import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.springboot.service.ReservationService;


@RestController
@RequestMapping(value = "/reservation")
public class ReservationController {

    @Autowired
  private  ReservationService ps;
    
   
    @GetMapping(value = "/getall")
    public List<Reservation> getAll() {
    	List<Reservation> reservations = null;
    	try {
    		   reservations = ps.findAll();
    		}
    	catch(Exception ex){
    		System.out.println(ex) ;}
    	
    	return reservations;
    }
    
   
    @GetMapping("/getreservationbyid/{id}")
    public Optional<Reservation> getReservationById(@PathVariable Integer id) {
        if(ps.findById(id) == null)
            return null;
        return ps.findById(id);
    }

    @PostMapping(value = "/load")
    public List<Reservation> persist(@RequestBody final Reservation users) {
    	ps.save(users);
        return ps.findAll();
    }
    
   
    @DeleteMapping(path ={"deleteReservation/{id}"})
    public ResponseEntity<?> delete(@PathVariable("id") Integer id) {
      return ps.findById(id)
          .map(record -> {
              ps.deleteById(id);
              return ResponseEntity.ok().build();
          }).orElse(ResponseEntity.notFound().build());
    }
    
    @PutMapping(value="modifyReservation/{id}")
    public ResponseEntity<Reservation> update(@PathVariable("id") Integer id,
                                          @RequestBody Reservation reservation){
    	
      return ps.findById(id)
          .map(record -> {
            
              record.setDate(reservation.getDate());
              record.setClient(reservation.getClient());
              record.setCreneau(reservation.getCreneau());
              record.setDisponiblite(reservation.getDisponiblite());
              record.setConfirmation(reservation.getConfirmation());
              Reservation updated = ps.save(record);
              return ResponseEntity.ok().body(updated);
          }).orElse(ResponseEntity.notFound().build());
    }
    
    
}