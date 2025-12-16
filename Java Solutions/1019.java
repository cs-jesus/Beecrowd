import java.util.*;

public class Main {
 
    public static void main(String[] args) {
 
        Scanner sc = new Scanner(System.in);
        
        int tempo = sc.nextInt();
        
        int segundo = tempo%60;
        int minuto = (tempo/60)%60;
        int hora = (tempo/60)/60;
        
        System.out.printf("%d:%d:%d%n", hora, minuto, segundo);
        sc.close();
    }
}
