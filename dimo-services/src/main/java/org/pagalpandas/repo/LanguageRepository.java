package org.pagalpandas.repo;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Repository
public class LanguageRepository {
    static private final Map<String,String> languageMap;

    static {
        languageMap = new HashMap<>();
        languageMap.put("en","English");
        languageMap.put("fr","French");
    }

    public String getLanguageName(String languageCode) {
        return languageMap.getOrDefault(languageCode.toLowerCase(),"");
    }
}
