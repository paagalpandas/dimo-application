package org.pagalpandas.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class DateFormatter {
    @Autowired
    SimpleDateFormat simpleDateFormatter;
    public String format(String date) {
        try {
            Date date1 = new SimpleDateFormat("yyyy-MM-dd").parse(date);
            return simpleDateFormatter.format(date1);
        } catch (ParseException parseException) {
            return date;
        }
    }

}
