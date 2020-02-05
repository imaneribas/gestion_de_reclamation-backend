package com.springboot;


import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
@EntityScan(basePackages = {"com.springboot.model"})

@SpringBootApplication
public class GestiondereclamationApplication {
	public static void main(String[] args) {
		SpringApplication.run(GestiondereclamationApplication.class, args);
	}

}
