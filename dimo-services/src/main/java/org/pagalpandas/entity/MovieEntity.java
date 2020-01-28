package org.pagalpandas.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class MovieEntity {

    @Id
    @GeneratedValue
    int id;

}
