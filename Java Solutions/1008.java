import java.util.*;

public class Main {
 
    public static void main(String[] args) {
 
        Scanner sc = new Scanner(System.in);
        
        int numFunc, horas;
        double valor, salario;
        
        numFunc = sc.nextInt();
        horas = sc.nextInt();
        valor = sc.nextDouble();
        
        salario = horas*valor;
        
        System.out.printf("NUMBER = %d\nSALARY = U$ %.2f\n",numFunc, salario);
        
        sc.close();
    }
 
}
