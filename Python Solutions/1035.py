dados = input().split()

A= int(dados[0])
B= int(dados[1])
C= int(dados[2])
D= int(dados[3])

CD= C+D
AB= A+B

if ((B>C) and (D>A) and (CD>AB) and (C>0) and (D>0) and (A%2==0)):
    print("Valores aceitos")
else:
    print("Valores nao aceitos")
