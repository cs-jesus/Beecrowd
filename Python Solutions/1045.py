lado= [float(x) for x in input().split()]

lado.sort(reverse=True)

if lado[0] >= (lado[1] + lado[2]):
    print("NAO FORMA TRIANGULO")
    
elif lado[0]**2 == (lado[1]**2 + lado[2]**2):
        print("TRIANGULO RETANGULO")    
    
else:
    
    if lado[0]**2 > (lado[1]**2 + lado[2]**2):
        print("TRIANGULO OBTUSANGULO")
        
    else:
        print("TRIANGULO ACUTANGULO")
    

    if lado[0] == lado[1] and lado[1] == lado[2]:
        print("TRIANGULO EQUILATERO")
    
    elif (lado[0] == lado[1] != lado[2]) or (lado[0] != lado[1] == lado[2]):
        print("TRIANGULO ISOSCELES")
