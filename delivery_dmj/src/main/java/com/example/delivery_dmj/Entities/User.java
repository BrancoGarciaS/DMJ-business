package com.example.delivery_dmj.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id_user; // atributo llave

    @Column(unique = true, nullable = false)
    String username; // el username tiene que ser único y no puede ser null

    @Column(nullable = false)
    String password;

    @Column(nullable = false)
    String name;

    String gender;

    String email;

    String phone;

    String address;

}
