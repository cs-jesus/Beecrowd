import java.util.*;

public class Main {
 
    public static void main(String[] args) {
 
        Scanner sc = new Scanner(System.in);
        
        String nome = sc.next();
        double salario, venda, comissao, total;
        
        salario = sc.nextDouble();
        venda = sc.nextDouble();
        comissao = venda*0.15;
        total = salario + comissao;
        
        System.out.printf("TOTAL = R$ %.2f\n", total);
        
        sc.close();
    }
}
