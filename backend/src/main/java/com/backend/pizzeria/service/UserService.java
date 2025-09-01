package com.backend.pizzeria.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.pizzeria.repository.UserRepository;

@Service
public class UserService {
    
    private final UserRepository repository;

    @Autowired
    public UserService(UserRepository repository)
    {
        this.repository = repository;
    }

    
   


}
