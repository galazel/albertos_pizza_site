package com.backend.pizzeria.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.pizzeria.model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel,Long>{
    
}
