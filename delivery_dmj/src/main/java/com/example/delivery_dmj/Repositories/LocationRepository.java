package com.example.delivery_dmj.Repositories;

import com.example.delivery_dmj.Entities.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository  extends JpaRepository<Location, Long> {

}
