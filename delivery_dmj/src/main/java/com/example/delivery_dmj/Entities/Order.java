package com.example.delivery_dmj.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id_order; // atributo llave

    private String customer_name;

    private float total_price;

    private String phone;

    private String email;

    private String gender; // Genero del cliente

    private String region;

    private String city;

    private String commune;

    private String address;

    private String state; // estado = confirmado, entregado, en camino, atendido

    private LocalDate order_date; // fecha de compra

    private LocalDate delivery_date; // fecha de entrega

    private float shipping_cost; // costo de envio

    private float total; // costo total: costo de envio + costo de productos - descuento

    private float products_cost; // costo de los productos

    private String dispatch_location; // ubicación de despacho (de que sede se despachó)

    private String username_customer; // nombre de usuario del comprador (si lo compra desde la cuenta iniciada)

}
