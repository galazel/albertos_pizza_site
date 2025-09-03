package com.backend.pizzeria.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.backend.pizzeria.dto.UserDTO;
import com.backend.pizzeria.model.UserModel;
import com.backend.pizzeria.repository.UserRepository;

import jakarta.validation.Valid;

@Service
public class UserService {

    private final UserRepository repository;

    @Autowired
    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public ResponseEntity<String> saveContact(@Valid UserDTO user) {
        UserModel model = UserModel.builder()
                .lastName(user.getLastName())
                .firstName(user.getFirstName())
                .email(user.getEmail())
                .location(user.getLocation())
                .subject(user.getSubject())
                .message(user.getMessage())
                .phoneNumber(user.getPhoneNumber())
                .build();
        repository.save(model);
        return ResponseEntity.status(200).body("Created Successfully");
    }

}
