import java.util.*;

public class Main {
 
    public static void main(String[] args) {
 
        Scanner sc = new Scanner(System.in);
        
        int a, b, c;
        
        a = sc.nextInt();
        b = sc.nextInt();
        int maiorAB = Math.max(a, b);
        
        c = sc.nextInt();
        int maior = Math.max(maiorAB, c);
        
        System.out.println(maior+" eh o maior");
        
        sc.close();
    }
}
