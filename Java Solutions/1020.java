import java.util.*;

public class Main {
 
    public static void main(String[] args) {
 
        Scanner sc = new Scanner(System.in);
        
        int diasTotais = sc.nextInt();
        
        int ano = diasTotais/365;
        
        int diasRestantes = diasTotais%365;
        int mes = diasRestantes/30;
        int dia = diasRestantes%30;
        
        System.out.printf("%d ano(s)%n%d mes(es)%n%d dia(s)%n", ano, mes, dia);
        
        sc.close();
    }
}
