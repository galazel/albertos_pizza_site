package com.backend.pizzeria.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.pizzeria.dto.UserDTO;
import com.backend.pizzeria.model.UserModel;
import com.backend.pizzeria.service.UserService;

import jakarta.validation.Valid;

@RestController
public class UserController 
{
    private final UserService service;
    @Autowired
    public UserController(UserService service)
    {
        this.service = service;
    }
    @PostMapping
    public ResponseEntity<?> saveContact(@Valid @RequestBody UserDTO user)
    {
        
        UserModel model = UserModel.builder()
                    .lastName(user.getLastName())
                    .firstName(user.getFirstName())
                    .email(user.getEmail())
                    .phoneNumber(user.getPhoneNumber())
                    .location(user.getLocation())
                    .message(user.getMessage())
                    .subject(user.getSubject())
                    .build();
    }
}
