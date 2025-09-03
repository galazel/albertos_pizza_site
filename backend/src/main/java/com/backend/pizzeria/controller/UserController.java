package com.backend.pizzeria.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.pizzeria.dto.UserDTO;
import com.backend.pizzeria.service.UserService;




@RestController
public class UserController 
{
    private final UserService service;
    @Autowired
    public UserController(UserService service)
    {
        this.service = service;
    }
    @PostMapping("/save")
    public ResponseEntity<?> saveContact(@RequestBody UserDTO user, BindingResult result)
    {
        return service.saveContact(user);
    }
}
