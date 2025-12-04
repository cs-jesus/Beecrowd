import java.util.*;

public class Main {
 
    public static void main(String[] args) {
 
     Scanner sc = new Scanner(System.in);
     
     double pi =3.14159, area, raio;
     
     raio = sc.nextDouble();
     area = pi*Math.pow(raio, 2);
     
     System.out.printf("A=%.4f\n",area);
     
     sc.close();
    }
}
