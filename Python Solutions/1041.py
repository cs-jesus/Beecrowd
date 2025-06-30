dados= input().split()

eixoY= float(dados[0])
eixoX= float(dados[1])

if eixoY == 0:
    if eixoX != 0:
        print("Eixo Y")
    
    else:
        print("Origem")

elif eixoX > 0:
    if eixoY > 0:
        print("Q1")
    else:
        print("Q2")

elif eixoX < 0:
    if eixoY > 0:
        print("Q4")
    else:
        print("Q3")
        
else:
    print("Eixo X")
