import java.util.*;

public class Main {
 
    public static void main(String[] args) {
 
        Scanner sc = new Scanner(System.in);
         
        double valor = sc.nextDouble();
        
        double[] valorMonetario = {100, 50, 20, 10, 5, 2, 1.0, 0.5, 0.25, 0.10, 0.05, 0.01};
        String[] tipo = {"nota", "moeda"};
        double[] qtde = new double[12];
        
        System.out.println("NOTAS:");
        
        int i, j=0;
        for(i=0; i<11;i++) {
            qtde[i] = Math.floor(valor/valorMonetario[i]);
            valor %= valorMonetario[i];
        }
        qtde[11] = valor/valorMonetario[11];
        
        for(i=0; i<12; i++) {
            System.out.printf("%.0f %s(s) de R$ %.2f%n", qtde[i], tipo[j], valorMonetario[i]);
            if (i==5) {
                j=1;
                System.out.println("MOEDAS:");
            }
        }
    }
}
