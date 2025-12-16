import java.util.*;

public class Main {
 
    public static void main(String[] args) {
 
        Scanner sc = new Scanner(System.in);
        
        final double consumo = 12.0;
        int tempo = sc.nextInt();
        int velocidade = sc.nextInt();
        
        double combustivelNecessario = (tempo*velocidade)/consumo;
        
        System.out.printf("%.3f%n", combustivelNecessario);
        
        sc.close();
    }
}
