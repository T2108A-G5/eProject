package authentication;

import java.util . regex.Matcher;
import java.util.regex.Pattern;
//Check password, password can chua 7 den 15 ki tu
//password chua it nhat 1 ki tu hoa, 1 ki tu dac biet(.,-_;)
public class Validate {
    public static final Pattern EmailRegex = Pattern.compile(
            "^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$",
            Pattern.CASE_INSENSITIVE);
    public static String validateEmail(String email) {
        Matcher matcher = EmailRegex.matcher(email);
        if (matcher.find()) {
            return email;
        } else {
            throw new RuntimeException("Email khong hop le");
        }
    }
    public static String validatePassword(String password){
        Matcher matcher = EmailRegex.matcher(password);
        if (matcher.find()) {
            return password;
        } else {
            throw new RuntimeException("Password khong hop le");
        }
    }
}