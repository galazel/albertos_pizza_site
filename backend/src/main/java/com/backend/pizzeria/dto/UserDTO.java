package com.backend.pizzeria.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO 
{
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String subject;
    private String location;
    private String message;
}
