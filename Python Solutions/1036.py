dados = input().split()
A= float(dados[0])
B= float(dados[1])
C= float(dados[2])

D= B**2 - 4*A*C

if (D<0 or A==0):
    print("Impossivel calcular")
    
else:
    R1= (B*(-1) + D**0.5)/(2*A)
    R2= (B*(-1) - D**0.5)/(2*A)
    print(f"R1 = {R1:.5f}")
    print(f"R2 = {R2:.5f}")       
