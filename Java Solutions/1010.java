import java.util.*;

public class Main {
 
    public static void main(String[] args) {
 
        Scanner sc = new Scanner(System.in);
        int qtdeP1, qtdeP2;
        double precoP1, precoP2;
        
        String[] Produto = sc.nextLine().trim().split(" ");
        qtdeP1 = Integer.parseInt(Produto[1]);
        precoP1 = Double.parseDouble(Produto[2]);
        
        Produto = sc.nextLine().trim().split(" ");
        qtdeP2 = Integer.parseInt(Produto[1]);
        precoP2 = Double.parseDouble(Produto[2]);
        
        double total = (qtdeP1*precoP1) + (qtdeP2*precoP2);
        
        System.out.printf("VALOR A PAGAR: R$ %.2f\n", total);
        
        sc.close();
    }
}
