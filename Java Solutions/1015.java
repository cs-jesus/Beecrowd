import java.util.*;

public class Main {
 
    public static void main(String[] args) {
 
        Scanner sc = new Scanner(System.in);
        
        String[] ponto1 = sc.nextLine().trim().split(" ");
        String[] ponto2 = sc.nextLine().trim().split(" ");
        
        double x1 = Double.parseDouble(ponto1[0]);
        double y1 = Double.parseDouble(ponto1[1]);
        double x2 = Double.parseDouble(ponto2[0]);
        double y2 = Double.parseDouble(ponto2[1]);
        
        double distancia = Math.sqrt( (Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2)));
        
        System.out.printf("%.4f%n", distancia);
        
        sc.close();
    }
}
