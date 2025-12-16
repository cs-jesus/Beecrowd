import java.util.*;

public class Main {
 
    public static void main(String[] args) {
 
        Scanner sc = new Scanner(System.in);
        Locale.setDefault(new Locale("pt", "BR"));
        
        int[] cedulas = {100, 50, 20, 10, 5, 2, 1};
        int[] quantidade = new int[7];
        
        int valor = sc.nextInt();
        System.out.printf("%d%n", valor);
        
        for(int i=0; i<7; i++) {
            quantidade[i] = valor/cedulas[i];
            valor = valor%cedulas[i];
            System.out.printf("%d nota(s) de R$ %d,00%n", quantidade[i], cedulas[i]);
        }
        
        sc.close();
    }
}
