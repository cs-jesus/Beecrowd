import java.util.*;

public class Main {
 
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        
        final double carroX = 60.0;
        final double carroY = 90.0;
        int distancia = sc.nextInt();
        
        double minutos = (distancia / (Math.abs(carroY - carroX)))*60;
        
        System.out.printf("%.0f minutos%n", minutos);
        
        sc.close();
    }
}
