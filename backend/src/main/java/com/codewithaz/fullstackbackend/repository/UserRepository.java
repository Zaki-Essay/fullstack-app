package com.codewithaz.fullstackbackend.repository;

import com.codewithaz.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
