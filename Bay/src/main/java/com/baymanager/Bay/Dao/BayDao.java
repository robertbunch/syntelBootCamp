package com.baymanager.Bay.Dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;

import com.baymanager.Bay.Model.Bays;

@Component
public class BayDao {
    @Autowired
    JdbcTemplate jdbcTemplate;

    private final String getBayQuery = "SELECT * FROM bays";
    public List getBays(){
        List<Bays> baysList = jdbcTemplate.query(getBayQuery, new BeanPropertyRowMapper<>(Bays.class));
        return baysList;
    }
}
