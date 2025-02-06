package com.example.delivery_dmj.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Variation { // Variaciones en color, material, sabor
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id_variations; // atributo llave

    private String name; // Nombre de la variación

    private String color; // Color asociado a la variación
}
