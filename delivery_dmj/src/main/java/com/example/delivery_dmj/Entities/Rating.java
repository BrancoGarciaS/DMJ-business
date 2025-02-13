package com.example.delivery_dmj.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Rating { // Valoraciones a los productos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id_rating; // atributo llave

    private int stars;

    private String comment; // Comentario asociado a la valoración

    private String username; // Usuario que comenta

    private Integer likes; // Me gustas al comentario

    private LocalDateTime created_at; // fecha de creación del comentario

    private LocalDateTime updated_at; // fecha de edición del comentario

    // Nota: agregar productos favoritos del usuario

    @ManyToOne
    @JoinColumn(name = "id_user", nullable = false) // Clave foránea
    private User user;

}
