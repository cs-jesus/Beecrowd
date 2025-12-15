import java.util.*;
 
public class Main {
 
    public static void main(String[] args) {
 
        Scanner sc = new Scanner(System.in);
        
        final double pi = 3.14159;
        double a = sc.nextDouble();
        double b = sc.nextDouble();
        double c = sc.nextDouble();
        
        double triangulo = (a*c)/2;
        System.out.printf("TRIANGULO: %.3f\n", triangulo);
        
        double circulo = pi*Math.pow(c,2);
        System.out.printf("CIRCULO: %.3f\n", circulo);
        
        double trapezio = ((a+b)*c)/2;
        System.out.printf("TRAPEZIO: %.3f\n", trapezio);
        
        double quadrado = Math.pow(b, 2);
        System.out.printf("QUADRADO: %.3f\n", quadrado);
        
        double retangulo = a*b;
        System.out.printf("RETANGULO: %.3f\n", retangulo);
        
        sc.close();
    }
}
