package com.backend.pizzeria.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "users")
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull(message = "firstname is required")
    @NotBlank(message = "firstname is required")
    private String firstName;
    @NotNull(message = "lastName is required")
    @NotBlank(message = "lastName is required")
    private String lastName;
    @NotBlank(message = "email should not be blank")
    @NotEmpty(message = "email should not be empty")
    @Pattern(regexp = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$", message = "invalid email")
    private String email;
    @NotBlank(message = "phoneNumber should not be blank")
    @NotEmpty(message = "phoneNumber should not be empty")
    @Pattern(regexp = "\\d{11}", message = "invalid phoneNumber")
    private String phoneNumber;
    @NotBlank(message = "subject should not be blank")
    @NotEmpty(message = "subject should not be empty")
    @Size(min = 10, max = 50, message = "subject should be at least 10 but less than or equals to 50")
    private String subject;
    @NotBlank(message = "location should not be blank")
    @NotEmpty(message = "location should not be empty")
    private String location;
    @NotBlank(message = "message should not be blank")
    @NotEmpty(message = "message should not be empty")
    private String message;

}
