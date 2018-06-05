package com.baymanager.Bay.Controller;

import com.baymanager.Bay.Dao.BayDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.baymanager.Bay.Model.Bays;

@RestController
public class BayController {
    @Autowired
    private BayDao bayDao;

    @RequestMapping("/")
    public @ResponseBody Iterable<Bays> getBay(){
        return bayDao.getBays();
    }
}
