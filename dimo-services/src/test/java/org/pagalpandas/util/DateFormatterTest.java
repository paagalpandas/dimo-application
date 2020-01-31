package org.pagalpandas.util;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.ParseException;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class DateFormatterTest {
    @Autowired
    DateFormatter dateFormatter;
    @Test
    void testformatter() throws ParseException {
        String str=dateFormatter.format("2007-05-01");
        assertEquals("May, 2007",str);
    }

    @Test
    void testformatterWithInvalidDateFormat() throws ParseException {
        String str=dateFormatter.format("2007/05/01");
        assertEquals("2007/05/01",str);
    }
}