package org.pagalpandas.dto;

import javax.validation.constraints.NotNull;
import java.io.Serializable;

public class MovieDTO implements Serializable {


    private String id;

   @NotNull(message="Movie Name cannot be null")
   private String name;

}
