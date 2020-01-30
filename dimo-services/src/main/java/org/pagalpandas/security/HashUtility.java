package org.pagalpandas.security;

import org.apache.tomcat.util.codec.binary.Base64;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import static org.pagalpandas.utils.Constants.SECRET_KEY;

public class HashUtility {

    public static String generateHash(String inputStr){

        try{
            Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
            SecretKeySpec secret_key = new SecretKeySpec(SECRET_KEY.getBytes(), "HmacSHA256");
            sha256_HMAC.init(secret_key);

            String hash = Base64.encodeBase64String(sha256_HMAC.doFinal(inputStr.getBytes()));
            return hash;
        }
        catch (Exception e){
            System.out.println("Error");
        }
        return null;
    }
}
