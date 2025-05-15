prod1= input().split()
cod1= int(prod1[0])
qtde1= int(prod1[1])
valor1= float(prod1[2])

prod2= input().split()
cod2= int(prod2[0])
qtde2= int(prod2[1])
valor2= float(prod2[2])

total= (qtde1*valor1 + qtde2*valor2)

print(f"VALOR A PAGAR: R$ {total:.2f}")
