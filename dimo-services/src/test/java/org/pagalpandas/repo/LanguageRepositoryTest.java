package org.pagalpandas.repo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class LanguageRepositoryTest {

    @Autowired
    LanguageRepository languageRepository;
    @Test
    void getLanguageNameTest() {
        assertEquals("English",languageRepository.getLanguageName("en"));
    }

    @Test
    void getInvalidLanguageNameTest() {
        assertEquals("",languageRepository.getLanguageName("hg"));
    }
}